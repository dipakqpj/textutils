import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

let name = "Dipak Gupta";
function App() {
  const [Mode, setMode] = useState("light"); // Whether Dark Mode is enabled Or Not

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  let toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark Mode has been Enables", "success");
      document.title = "TextUtils - Dark Mode";

      setInterval(() => {
        document.title = "its Amazing";
      }, 500);
      setInterval(() => {
        document.title = "Install TextUtils NOW";
      }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been Enables", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    // <>
    //   <div className="blank"><h1>Lovely</h1></div>
    //   <nav>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Contact</li>
    //   </nav>
    //   <div className="container">
    //   <h2>Hello, {name}</h2>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minima culpa porro, harum laudantium error aspernatur fuga doloribus laboriosam esse a aperiam, impedit perferendis nisi quos dicta magnam totam?
    //     </p>
    //   </div>

    // </>
    <>
      <Router>
        <Navbar
          title="TextUtils"
          Home="house"
          mode={Mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Navbar />
        <div className="container my-3">
          <Routes>
            {/* <Route path="/about" element={<About />} /> */}
            <Route
              exact path="/"
              element={
                <TextForm
                  showalert={showalert}
                  heading="Enter The Text To Analyze Below"
                  Mode={Mode}
                />
              }
            />
          </Routes>
        </div>
        <About/>
      </Router>
    </>
  );
}

export default App;

// react is partial ....    write EXACT PATH
