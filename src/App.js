import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Logo from "./components/assets/Logo.svg";

function App() {
  return (
    <>
      <meta name="description" content="Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist"/>
      <meta name="og:image" content={Logo}/>
      <Nav></Nav>
      <Header></Header>
      <main>
        <Hero></Hero>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
