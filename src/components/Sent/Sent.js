import React from "react";
import css from "./Sent.module.css";
export default function Sent() {
  const goNext = () => {};
  return (
    <div className={css.welcomeContainer}>
      <div className={css.imgContainer}>
        <img src="/logoJordan.png"></img>
      </div>
      <div className={css.textContainer}>
        <div className={css.titleContent}>
          <h2>Análise pronta!</h2>
        </div>
        <div className={css.textContent}>
          <h5>
            Em breve o seu score será entregue no email informado, não se
            esqueça de checar a caixa de spam, caso não o encontre em sua caixa
            de entrada!
          </h5>
        </div>
      </div>
      <div className={css.buttonContainer}>
        <a href="https://www.hubkn.com">
          <button className={css.next} onClick={goNext}>
            conheça a hubkn
          </button>
        </a>
      </div>
    </div>
  );
}
