import React from "react";
import css from "./NotSent.module.css";
export default function NotSent({ changePage }) {
  const goBack = () => {
    changePage("Forms");
  };
  return (
    <div className={css.welcomeContainerSent}>
      <div className={css.imgContainerSent}>
        <img className={css.jordan} src="/logoJordan.png"></img>
        <img
          className={css.semicircle}
          src="/hubkn_simboloJordan_Degradê-01.png"
        ></img>
      </div>
      <div className={css.textContainerSent}>
        <div className={css.titleContentSent}>
          <h2 style={{ color: "#fc9c04" }}>Ops, ocorreu um probleminha!</h2>
        </div>
        <div className={css.textContentSent}>
          <h5>
            Por favor, verifique sua chave de api hubspot e tente novamente, ou
            entre em contato conosco
          </h5>
        </div>
      </div>
      <div className={css.buttonContainerSent}>
        <div>
          <button className={css.return} onClick={goBack}>
            Tentar novamente
          </button>
        </div>
        <div>
          <a href="https://www.hubkn.com">
            <button className={css.nextSent}>Fale com a hubkn</button>
          </a>
        </div>
      </div>
    </div>
  );
}
