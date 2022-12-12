import Header from "./Header";
import Container from "./Container";
import './4.css';

function App() {
  return (
    <div>
      <Header text="My Website" btn1="Login" btn2="About" btn3="Home" />
      <Container google="https://www.google.com" youtube="https://www.youtube.com" amazon="https://www.amazon.com" facebook="https://www.facebook.com" yahoo="https://www.yahoo.com" />

    </div>
  );
}

export default App;