import { useState, useRef, useEffect } from "react";

import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [show, setShow] = useState(false);

  const ref = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
      return () => {
        document.removeEventListener("mousedown", null);
      };
    });
  }, [ref]);

  return (
    // BEM Conventions
    <div className="app">
      <button className="press__btn" onClick={() => setShow(!show)}>
        Press Here
      </button>
      <div ref={ref}>
        <Modal
          show={show}
          title="Update Required"
          image="https://cdn2.iconfinder.com/data/icons/ballicons-2-free/100/wrench-256.png"
          desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          unde atque odit explicabo. Accusamus, eveniet?"
          onClose={() => setShow(false)}
        />
      </div>
    </div>
  );
}

export default App;
