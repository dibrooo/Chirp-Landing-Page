import "./App.scss";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Tweets from "./components/Tweets";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Tweets />
        <Price />
      </main>
      <Footer />
    </>
  );
}

export default App;
