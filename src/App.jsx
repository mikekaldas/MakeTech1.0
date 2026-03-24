import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, background: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float speed={2} rotationIntensity={1}>
            <Sphere args={[1.2, 32, 32]}>
              <MeshDistortMaterial color="#0ea5e9" distort={0.4} speed={2} />
            </Sphere>
          </Float>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
      <div style={{ zIndex: 10, textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', letterSpacing: '0.2em', color: '#1e293b', fontWeight: 'bold' }}>MaKe <span style={{ color: '#0ea5e9' }}>Technologies</span></h1>
        <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '10px' }}>SYSTEMS INITIALIZING...</p>
      </div>
    </div>
  );
}
