import React from "react";
import css from "./Rules.module.css";

export default function Rules({ changePage }) {
  const goNext = () => {
    changePage("Forms");
  };
  return (
    <div className={css.welcomeContainer}>
      <div className={css.imgContainer}>
        <img src="/logoJordan.png"></img>
      </div>
      <div className={css.textContainer}>
        <div className={css.titleContent}>
          <h5>Regras do jogo</h5>
        </div>
        <div className={css.textContent}>
          <ul className={css.rulesList} style={{ listStyleType: "circle" }}>
            <li>
              Ao preencher e enviar o formulário a seguir, o usuário concorda em
              compartilhar os dados mais recentes registrados em seu CRM para
              análise.
            </li>
            <li>
              Os dados do CRM serão recuperados via API do hubspot pela chave
              fornecida pelo usuário e não serão armazenados de nenhuma maneira
              pela hubkn.
            </li>
            <li>
              O usuário poderá consultar o Score de seu CRM uma vez a cada 30
              dias.
            </li>
            <li>
              O seu relatório deverá ser enviado ao endereço de email enviado no
              formulário, portanto, recomendamos que utilize o seu melhor e-mail
              para recebê-lo.
            </li>
          </ul>
          <div className={css.buttonContainer}>
            <button type="button" className={css.next} onClick={goNext}>
              Concondar e continuar{" "}
              <span style={{ fontSize: "20px" }}>&#10157;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
