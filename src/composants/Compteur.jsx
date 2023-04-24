import React, { useEffect, useState } from "react";

export default function Compteur(props) {
  const [compteur, setCompteur] = useState(5);
  const incrementer = () => {
    setCompteur(compteur + 1);
  };
  const decrementer = () => {
    setCompteur(compteur - 1);
  };

  useEffect(() => {
    console.log("Je suis rendu");
  });
  return (
    <>
      {props.age ? <p>Vous avez {props.age}</p> : null}
      <div className="compteur">
        <button onClick={incrementer}>+</button>
        <p className={compteur < 0 && "erreur"}>{compteur}</p>
        <button onClick={decrementer}>-</button>
      </div>
    </>
  );
}
