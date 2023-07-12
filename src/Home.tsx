import React, { useState } from "react";
import { Col, Input, Button, Typography, Layout } from "antd";

interface HomeProps {
  onButtonClick: (name: string) => void;
}

const Home: React.FC<HomeProps> = ({ onButtonClick }) => {
  const [name, setName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    onButtonClick(name);
  };

  return (
    <Layout style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <Typography.Title level={2}>Bienvenido a conectados</Typography.Title>
        <Input
          value={name}
          onChange={handleInputChange}
          placeholder="Ingrese su nombre"
          style={{ marginBottom: "10px" }}
        />
        <Button type="primary" onClick={handleButtonClick}>
          Iniciar
        </Button>
      </div>
    </Layout>
  );
};

export default Home;
