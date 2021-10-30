import Container from "./Container";
import "./App.css";

function App() {
  return (
    <div className="background" style={{background: 'linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)),url(/images/back.jpg)'}}>
      <Container />
    </div>
  );
}

export default App;
