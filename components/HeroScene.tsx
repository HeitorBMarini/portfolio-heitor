"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Esfera de partículas que "respira" com ruído 3D no shader e segue o mouse.
const vertex = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  attribute float aRandom;
  varying float vDepth;
  varying float vMix;

  // Simplex noise 3D (Ashima Arts / Stefan Gustavson, MIT)
  vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
  float snoise(vec3 v){
    const vec2 C=vec2(1.0/6.0,1.0/3.0);
    const vec4 D=vec4(0.0,0.5,1.0,2.0);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.0-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    i=mod289(i);
    vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
    float n_=0.142857142857;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.0*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.0*x_);
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.0-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.0+1.0;
    vec4 s1=floor(b1)*2.0+1.0;
    vec4 sh=-step(h,vec4(0.0));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
    m=m*m;
    return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  void main(){
    vec3 dir = normalize(position);
    float n = snoise(dir * 1.6 + vec3(uTime * 0.18));
    float n2 = snoise(dir * 4.0 - vec3(uTime * 0.25));
    vec3 displaced = position + dir * (n * 0.28 + n2 * 0.06);

    vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
    gl_Position = projectionMatrix * mv;

    vDepth = smoothstep(-3.2, 1.2, mv.z + 4.0);
    vMix = clamp(n * 0.5 + 0.5, 0.0, 1.0);
    gl_PointSize = uSize * uPixelRatio * (0.6 + aRandom * 0.8) * (1.0 / -mv.z);
  }
`;

const fragment = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uOpacity;
  varying float vDepth;
  varying float vMix;

  void main(){
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d);
    vec3 color = mix(uColorA, uColorB, vMix);
    gl_FragColor = vec4(color, alpha * uOpacity * (0.25 + vDepth * 0.75));
  }
`;

function readColors() {
  const s = getComputedStyle(document.documentElement);
  const light = document.documentElement.dataset.theme === "light";
  return {
    a: new THREE.Color(s.getPropertyValue("--accent").trim() || "#60a5fa"),
    b: new THREE.Color(s.getPropertyValue("--accent-2").trim() || "#818cf8"),
    light,
  };
}

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch {
      return; // Sem WebGL: o hero continua funcionando sem a cena.
    }

    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pixelRatio);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 4.2);

    // Esfera de Fibonacci: pontos distribuídos uniformemente
    const COUNT = window.innerWidth < 768 ? 2600 : 5200;
    const positions = new Float32Array(COUNT * 3);
    const randoms = new Float32Array(COUNT);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const radius = 1.35;
      positions[i * 3] = Math.cos(theta) * r * radius;
      positions[i * 3 + 1] = y * radius;
      positions[i * 3 + 2] = Math.sin(theta) * r * radius;
      randoms[i] = Math.random();
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 1));

    const colors = readColors();
    const material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      depthWrite: false,
      blending: colors.light ? THREE.NormalBlending : THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 26 },
        uPixelRatio: { value: pixelRatio },
        uColorA: { value: colors.a },
        uColorB: { value: colors.b },
        uOpacity: { value: colors.light ? 0.75 : 0.9 },
      },
    });
    const sphere = new THREE.Points(geometry, material);

    // Anel orbital fino
    const ringGeo = new THREE.TorusGeometry(2.05, 0.004, 8, 220);
    const ringMat = new THREE.MeshBasicMaterial({ color: colors.a, transparent: true, opacity: 0.35 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.4;

    // Poeira ao redor
    const DUST = 420;
    const dustPos = new Float32Array(DUST * 3);
    for (let i = 0; i < DUST; i++) {
      const r = 2.2 + Math.random() * 2.8;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      dustPos[i * 3] = r * Math.sin(p) * Math.cos(t);
      dustPos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      dustPos[i * 3 + 2] = r * Math.cos(p);
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: colors.b,
      size: 0.018,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    const dust = new THREE.Points(dustGeo, dustMat);

    const group = new THREE.Group();
    group.add(sphere, ring, dust);
    scene.add(group);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // Em telas largas, desloca a esfera para a direita do texto
      const wide = w >= 1024;
      group.position.x = wide ? 1.35 : w >= 640 ? 1.1 : 0.3;
      group.position.y = wide ? 0 : 0.5;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    // Cores acompanham a troca de tema
    const mo = new MutationObserver(() => {
      const c = readColors();
      material.uniforms.uColorA.value = c.a;
      material.uniforms.uColorB.value = c.b;
      material.uniforms.uOpacity.value = c.light ? 0.75 : 0.9;
      material.blending = c.light ? THREE.NormalBlending : THREE.AdditiveBlending;
      material.needsUpdate = true;
      ringMat.color = c.a;
      dustMat.color = c.b;
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const pointer = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(mount);

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible || document.hidden) return;
      const t = clock.getElapsedTime();
      material.uniforms.uTime.value = t;
      sphere.rotation.y = t * 0.08;
      ring.rotation.z = t * 0.12;
      dust.rotation.y = -t * 0.02;
      // Inclina suavemente em direção ao ponteiro
      group.rotation.x += (pointer.y * 0.25 - group.rotation.x) * 0.04;
      group.rotation.y += (pointer.x * 0.35 - group.rotation.y) * 0.04;
      renderer.render(scene, camera);
    };

    if (reduced) {
      material.uniforms.uTime.value = 2;
      renderer.render(scene, camera);
    } else {
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      geometry.dispose();
      material.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} aria-hidden className="absolute inset-0 [&>canvas]:w-full [&>canvas]:h-full" />;
}
