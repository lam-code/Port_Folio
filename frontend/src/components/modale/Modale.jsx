import React, { useState } from "react";
import "./Modale.css";

function Modale() {
  const [modale, setModale] = useState(true);
  const toggleModale = () => {
    setModale(!modale);
  };
  return (
    <>
      <button Onclick={toggleModale} className="btn-modale">
        Open
      </button>

      {modale && (
        <div className="overlay">
          <div className="modale">
            <div className="modale-content">
              <h2> Mes Projects </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                aliquid atque doloremque cum ex corrupti, a aliquam alias
                voluptas incidunt enim laborum voluptates fuga sed, blanditiis
                reiciendis facilis dolorum magnam!
              </p>
              <button Onclick={toggleModale} className="close-modale">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Modale;

