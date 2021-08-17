import React from "react";
import css from "./welcome.module.css";

export default function Welcome({ changePage }) {
  const goNext = () => {
    changePage("Forms");
    console.log(`Clicou para testar`);
  };
  return (
    <div className={css.welcomeContainer1}>
      <div className={css.imgContainer}>
        <img src="/hubkn_simbolo.png"></img>
      </div>
      <div className={css.textContainer}>
        <div className={css.titleContent}>
          <h2>
            {/* Olá, eu sou <span style={{ color: "#fc9c04" }}>Jordan</span>, posso
            ajudá-lo a tirar o máximo de sua operação de vendas. */}
            Usuário <span style={{ color: "#fc9c04" }}>HubSpot</span>, você
            confia no preenchimento do seu
            <span style={{ color: "#fc9c04" }}> CRM</span>?
          </h2>
        </div>
        <div className={css.textContent}>
          <h5>
            Que tal fazer um teste rápido e gratuito para checar como seus
            vendedores estão preenchendo os dados em seu CRM?
          </h5>
        </div>
      </div>
      <div className={css.buttonContainerWelcome}>
        <div className={css.Navigation}>
          {/* <a>&#9711;</a>
          <a>&#9675;</a> */}
        </div>
        <button className={css.nextWelcome} onClick={goNext}>
          <span style={{ fontSize: "20px" }}>Testar HubSpot &#10148; </span>
        </button>
      </div>
    </div>
  );
}
