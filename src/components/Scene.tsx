import React, { useEffect, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Scene: React.FC = () => {
  const sphereRef = useRef<any>();

  useEffect(() => {
    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      if (sphereRef.current) {
        const { beta, gamma } = event;
        const x = (gamma || 0) / 90; // Normalizar el valor gamma entre -1 y 1
        const y = (beta || 0) / 90; // Normalizar el valor beta entre -1 y 1

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        sphereRef.current.position.x = x * 5; // Ajustar la velocidad de movimiento
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        sphereRef.current.position.y = y * 5; // Ajustar la velocidad de movimiento
      }
    };



    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <OrbitControls />
      <Sphere ref={sphereRef} args={[0.7, 32, 32]} position={[0, 0, 0]}>
        <meshPhongMaterial color="red" />
      </Sphere>
    </Canvas>
  );
};

export default Scene;
