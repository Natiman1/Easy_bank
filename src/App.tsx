import About from "./components/About";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen w-screen lg:px-33">
      <Navbar />
      <Hero />
      <About />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
