"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, TorusKnot } from "@react-three/drei";
import * as THREE from "three";

function MorphingShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(t / 4) / 4;
      meshRef.current.rotation.y = Math.sin(t / 4) / 4;
      meshRef.current.rotation.z = Math.sin(t / 4) / 4;
      meshRef.current.position.y = Math.sin(t / 2) / 3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <TorusKnot ref={meshRef} args={[1, 0.3, 200, 32]}>
        <MeshDistortMaterial
          color="#0ea5e9"
          speed={3}
          distort={0.4}
          radius={1}
          roughness={0.1}
          metalness={0.9}
          opacity={0.3}
          transparent
          emissive="#7c3aed"
          emissiveIntensity={0.5}
        />
      </TorusKnot>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} color="#0ea5e9" intensity={1} />
        <pointLight position={[10, 10, 10]} color="#7c3aed" intensity={1} />
        <MorphingShape />
      </Canvas>
    </div>
  );
}
