import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Scene: React.FC = () => {
  const [spherePosition, setSpherePosition] = useState<[number, number, number]>([0, 0, 0]);
  const speed = 0.1; // Factor de velocidad

  useEffect(() => {
    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;
      const x = (gamma || 0) / 90; // Normalizar el valor gamma entre -1 y 1
      const y = (beta || 0) / 90; // Normalizar el valor beta entre -1 y 1

      setSpherePosition(prevPosition => [
        prevPosition[0] + x * speed, // Mover la esfera en el eje X
        prevPosition[1] + y * speed, // Mover la esfera en el eje Y
        prevPosition[2] // Mantener la posición en el eje Z
      ]);
    };

    if (typeof DeviceOrientationEvent !== 'undefined') {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    } else {
      console.error('El dispositivo no admite el acceso a la orientación.');
    }

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <OrbitControls />
      <Sphere args={[0.7, 32, 32]} position={spherePosition}>
        <meshPhongMaterial color="red" />
      </Sphere>
    </Canvas>
  );
};

export default Scene;
