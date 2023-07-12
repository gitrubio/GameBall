import React, { useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Button } from "antd";

const Scene: React.FC = () => {
  const sphereRef = useRef<any>();
  const speed = 0.1; // Factor de velocidad

  useEffect(() => {
    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      if (sphereRef.current) {
        const { beta, gamma } = event;
        const x = (gamma || 0) / 90; // Normalizar el valor gamma entre -1 y 1
        const y = (beta || 0) / 90; // Normalizar el valor beta entre -1 y 1

        sphereRef.current.position.x = x * speed; // Ajustar la velocidad de movimiento
        sphereRef.current.position.y = y * speed; // Ajustar la velocidad de movimiento
      }
    };
 
      window.addEventListener('deviceorientation', handleDeviceOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  function testDeviceOrientation() {

    if (typeof DeviceOrientationEvent !== "function") {
     alert("DeviceOrientationEvent not detected");
    }
    if (typeof DeviceOrientationEvent.requestPermission !== "function") {
      alert("DeviceOrientationEvent.requestPermission not detected");
    }
    DeviceOrientationEvent.requestPermission().then(function (result : any) {
    
      window.addEventListener("deviceorientation", handleDeviceOrientation, true);
      alert(result);
    });
  }
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "violet",
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <OrbitControls />
        <Sphere ref={sphereRef} args={[0.5, 32, 32]} position={[0, 0, 0]}>
          <meshPhongMaterial color="red" />
        </Sphere>
        <OrbitControls />
      </Canvas>
        <Button onClick={testDeviceOrientation}>Permisos</Button>
    </>
  );
};

export default Scene;
