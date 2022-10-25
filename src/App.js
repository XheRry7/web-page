import Header from "./components/header/header";
import About from "./components/about/about";
import Events from "./components/events/events";
import Footer from "./components/footer/footer";
import Services from "./components/services/services";
import Updates from "./components/updates/updates";
import { useState } from "react";

function App() {
  const [state, setSate] = useState(false);

  return (
    <>
      <Header state={state} setState={setSate} />
      <About />
      <Events />
      <Services />
      <Updates />
      <Footer />
    </>
  );
}

export default App;
