import React, { useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Button } from "antd";

const Scene: React.FC = () => {
  const sphereRef = useRef<any>();
  const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
    if (sphereRef.current) {
      const { beta, gamma } = event;

      // Ajustar los valores de movimiento según la orientación del dispositivo
      const moveX = gamma || 0;
      const moveY = beta || 0;

      // Escalar los valores para controlar la velocidad de movimiento
      const scaleFactor = 0.01;
      const moveAmountX = moveX * scaleFactor;
      const moveAmountY = moveY * scaleFactor;

      // Actualizar la posición de la esfera según los valores de movimiento
      sphereRef.current.position.x = moveAmountX;
      sphereRef.current.position.y = moveAmountY;
    }
  };
  useEffect(() => {
   if (typeof DeviceOrientationEvent !== "undefined") {
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    } else {
      console.error("El dispositivo no admite el acceso a la orientación.");
    }

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  const requestOrientationPermission = async () => {
    try {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
       
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        const permission = await DeviceOrientationEvent.requestPermission();
       
        alert(`${permission} = dame tus permisos`);
        if (permission === "granted") {
          window.addEventListener(
            "deviceorientation",
            handleDeviceOrientation,
            true
          );
        }
      } else {
        window.addEventListener(
          "deviceorientation",
          handleDeviceOrientation,
          true
        );
      }
    } catch (error) {
      console.error(
        "Error al solicitar permisos para acceder a la orientación del dispositivo:",
        error
      );
    }
  };
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
      <Button onClick={requestOrientationPermission}>Permisos</Button>
    </>
  );
};

export default Scene;
