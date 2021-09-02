import React, { useEffect } from "react";
import css from "./welcome.module.css";
import M from "materialize-css";

export default function Welcome({ changePage }) {
  const goNext = () => {
    changePage("Forms");
    console.log(`Clicou para testar`);
  };

  const openModal = () => {
    const modal = document.getElementById("modal1");
    var instance = M.Modal.getInstance(modal);
    instance.open();
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
            {/* Usuário <span style={{ color: "#fc9c04" }}>HubSpot</span>,  */}
            Você confia no preenchimento do seu
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
          <a href="#modal1" onClick={openModal} style={{ fontSize: "1em" }}>
            Não sou usuário hubSpot
          </a>

          <div id="modal1" class="modal modal-fixed-footer">
            <div class="modal-content">
              <div
                class="pipedriveWebForms"
                data-pd-webforms="https://webforms.pipedrive.com/f/1teqWfAPUU51AampDyVHoYxlsmdo83XT6bRMY1mWDsGkSCKEIZfC5dz14D290q6Gv"
              ></div>
            </div>
            <div class="modal-footer">
              <a
                href="#!"
                class="modal-close waves-effect waves-green btn-flat"
              >
                Agree
              </a>
            </div>
          </div>
        </div>
        <button className={css.nextWelcome} onClick={goNext}>
          {/* <span style={{ fontSize: "20px" }}> */}
          Testar HubSpot &#10148;
          {/* </span> */}
        </button>
      </div>
    </div>
  );
}
