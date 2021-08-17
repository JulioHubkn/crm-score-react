import React, { useState } from "react";
import css from "./Forms.module.css";

export default function Forms({ changePage }) {
  const [formConfirmation, setFormConfirmation] = useState(false);
  const [checkEmails, setCheckEmails] = useState(false);
  const [checkApiKey, setCheckApiKey] = useState(false);
  const goNext = () => {
    changePage("Load Report");
  };

  const goBack = () => {
    changePage("Welcome");
  };
  const validateEmail = (event) => {
    let email1 = document.getElementById("email1").value;
    let email2 = document.getElementById("email2").value;
    let hubspotAPIInput = document.getElementById("hubspotAPI").value;
    let emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let hubspotAPIPattern =
      /[A-Za-z0-9]{8}\-[A-Za-z0-9]{4}\-[A-Za-z0-9]{4}\-[A-Za-z0-9]{4}\-[A-Za-z0-9]{12}/;
    if (email1.match(emailPattern) && email1 === email2) {
      setCheckEmails(false);
    } else {
      setFormConfirmation(false);
      if (email1 !== email2) {
        setCheckEmails(true);
      } else {
        setCheckEmails(false);
      }
    }

    if (hubspotAPIInput.match(hubspotAPIPattern)) {
      setCheckApiKey(false);
    } else {
      if (hubspotAPIInput.length > 1) {
        setCheckApiKey(true);
      }
    }

    if (
      email1.match(emailPattern) &&
      email1 === email2 &&
      hubspotAPIInput.match(hubspotAPIPattern)
    ) {
      setFormConfirmation(true);
    } else {
      setFormConfirmation(false);
    }
  };
  return (
    <div className={css.welcomeContainer}>
      <div className={css.imgContainer}>
        <img src="/logoJordan.png"></img>
      </div>
      <div className={css.textContainer}>
        <div className={css.titleContentForms}>
          <h5 style={{ color: "#fc9c04" }}>
            Okay, só preciso das seguintes informações
          </h5>
        </div>
        <div className={css.textContent}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className={css.inputContainer}>
              <label htmlFor="name">Nome Completo</label>
              <input type="text" name="name" required />
            </div>
            <div className={css.inputContainer}>
              <label htmlFor="name">Nome da Empresa</label>
              <input type="text" name="companyName" required />
            </div>
            <div className={css.inputContainer}>
              <label htmlFor="name">E-mail</label>
              <input
                type="email"
                id="email1"
                name="email"
                onKeyUp={validateEmail}
              />
            </div>
            <div className={css.inputContainer}>
              <label htmlFor="name">E-mail (confirmação) </label>
              <span
                className={css.alertLabel}
                // style={{ color: "red", marginLeft: "15%" }}
              >
                {checkEmails ? "Os emails digitados devem ser iguais   " : null}
              </span>
              <input
                type="email"
                name="emailConfirmation"
                id="email2"
                onKeyUp={validateEmail}
              />
            </div>
            <div className={css.inputContainer}>
              <label htmlFor="name">
                HubSpot API Key{" "}
                <span
                  className={css.alertLabel}
                  // style={{ color: "red", marginLeft: "20%" }}
                >
                  {checkApiKey
                    ? "Ex:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                    : null}
                </span>
              </label>

              <input
                type="text"
                name="hubspotAPI"
                id="hubspotAPI"
                pattern="[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}"
                title="xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                onKeyUp={validateEmail}
              />
            </div>
            <div className={css.buttonContainerForms}>
              <div className={css.Navigation}>
                <a className={css.back} onClick={goBack}>
                  &#8610;{" "}
                  <span style={{ fontSize: "0.5em", marginBottom: "5px" }}>
                    Voltar
                  </span>
                </a>
              </div>
              {formConfirmation ? (
                <button
                  type="submit"
                  className={css.nextForms}
                  onClick={goNext}
                >
                  <span style={{ fontSize: "18px" }}>
                    Testar HubSpot &#10148;
                  </span>
                </button>
              ) : (
                <button
                  type="submit"
                  className={css.nextForms}
                  disabled
                  onClick={goNext}
                >
                  <span style={{ fontSize: "18px" }}>Testar HubSpot</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
