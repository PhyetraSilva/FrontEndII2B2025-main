'use client';
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // let nr = 0;
  const [nr, setNr] = useState(0);

  const somar = () => {
    setNr(nr + 1);
    console.log(nr);
  }

  const subtrair = () => {
    setNr(nr - 1);
    console.log(nr);
  }

  return (
    <div>
      <main>
        <h1 className={styles.titulo}>Hello Worlds!</h1>
        <button onClick={() => { somar() }} className={styles.btn}>+</button>
        <button onClick={() => { subtrair() }} className={styles.btn}>-</button>
        <p>Número: {nr}</p>
      </main>
    </div>
  );
}
