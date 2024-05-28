import { useEffect, useRef } from "react";
import "./App.css";
import Main from "./Components/Main";

function App() {
  let idBtn = useRef();

  const scrollFunction = () => {
    const mybutton = idBtn.current;
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.classList.remove("hidden-btn-btt");
      mybutton.classList.add("show-btn-btt");
      setTimeout(() => {
        mybutton.style.display = "block";
      }, 300);
    } else {
      mybutton.classList.remove("show-btn-btt");
      mybutton.classList.add("hidden-btn-btt");
      setTimeout(() => {
        mybutton.style.display = "none";
      }, 300);
    }
  };
  useEffect(() => {
    window.onscroll = () => {
      scrollFunction();
    };
  });

  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <Main />
      <button
        ref={idBtn}
        onClick={() => topFunction()}
        className="btn-BackToTop"
        id="btn-Top"
        style={{ display: "none" }}
      >
        <i className="fa fa-arrow-up" onClick={() => topFunction()} />
      </button>
    </>
  );
}

export default App;
