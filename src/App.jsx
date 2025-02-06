import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Blog from "./components/blog/Blog.jsx";
import Products from "./components/products/Products.jsx";
import HowItWorks from "./components/how-it-works/HowItWorks.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  const [openIndex, setOpenindex] = useState(null);

  useEffect(() => {
    console.log("", openIndex);
  }, [openIndex]);


  return (
    <>

      <Router>
      <Header />
        <Routes>
          <Route
            path="/"
            element={<Home openIndex={openIndex} setOpenindex={setOpenindex} />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
        <Footer />
      </Router>


    </>
  );
}

export default App;
