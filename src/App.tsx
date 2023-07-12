import Home from "./Home";

const App = () => {
  const handleButtonClick = (name: string) => {
    console.log("Button clicked with name:", name);
  };
  return (
    <div>
      <Home onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
