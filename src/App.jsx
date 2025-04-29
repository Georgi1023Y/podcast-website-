import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Episodes from "./components/Episodes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <Helmet>
        <title>Топкастът на Божидар Сираков</title>
        <meta
          name="description"
          content="Добре дошли в нашия подкаст. Слушайте интересни интервюта и обсъждания на важни теми!"
        />
        <meta
          name="keywords"
          content="подкаст, интервюта, гости, технологии, бизнес"
        />
        <meta property="og:title" content="Топкастът на Божидар Сираков" />
        <meta
          property="og:description"
          content="Добре дошли в нашия подкаст. Слушайте интересни интервюта и обсъждания на важни теми!"
        />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:image"
          content="https://yt3.googleusercontent.com/pKx_amII6h1rVSlOKUhZ9qw-Sf3fN9x53f_pS2PelPVAqAHzZTWi5pKRHnSwxnxs1GfXILr_=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="https://yt3.googleusercontent.com/pKx_amII6h1rVSlOKUhZ9qw-Sf3fN9x53f_pS2PelPVAqAHzZTWi5pKRHnSwxnxs1GfXILr_=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
        />
        <meta name="twitter:title" content="Топкастът на Божидар Сираков" />
        <meta
          name="twitter:description"
          content="Добре дошли в нашия подкаст. Слушайте интересни интервюта и обсъждания на важни теми!"
        />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Episodes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
