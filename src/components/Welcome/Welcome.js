import React from "react";
import css from "./welcome.module.css";

export default function Welcome({ changePage }) {
  const goNext = () => {
    changePage("Forms");
    console.log(`Clicou para testar`);
  };
  return (
    <div className={css.welcomeContainer}>
      <div className={css.imgContainer}>
        <img src="/hubkn_simbolo.png"></img>
      </div>
      <div className={css.textContainer}>
        <div className={css.titleContent}>
          <h2 style={{ color: "#fc9c04" }}>
            {/* Olá, eu sou <span style={{ color: "#fc9c04" }}>Jordan</span>, posso
            ajudá-lo a tirar o máximo de sua operação de vendas. */}
            Usuário HubSpot, você confia nos dados do seu CRM?
          </h2>
        </div>
        <div className={css.textContent}>
          <h5>
            Que tal fazer um teste rápido e gratuito para checar como seus
            vendedores estão preenchendo os dados em seu CRM?
          </h5>
        </div>
      </div>
      <div className={css.buttonContainer}>
        <button className={css.next} onClick={goNext}>
          Testar HubSpot <span style={{ fontSize: "20px" }}>&#10157;</span>
        </button>
      </div>
    </div>
  );
}
