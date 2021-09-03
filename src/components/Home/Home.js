import React, { useState, useEffect, cleanup } from "react";
import Welcome from "../Welcome/Welcome";
import Forms from "../Forms/Forms";
import Loading from "../Loading/Loading";
import Rules from "../Rules/Rules";
import Sent from "../Sent/Sent";
import NotSent from "../NotSent/NotSent";
import M from "materialize-css";
import css from "./home.module.css";

export default function Home() {
  const [page, setPage] = useState("Welcome");
  // const [page, setPage] = useState("Forms");
  const [sendConfirmation, setSendConfirmation] = useState();

  const changePage = (page) => {
    setPage(page);
    setSendConfirmation();
  };

  const sendEmailTrigger = (requestOutcome) => {
    setSendConfirmation({ validate: requestOutcome });
  };

  const fetchData = async (hubspotAPIInput, email, name, companyName) => {
    let myRequest = {
      hubspotAPIKey: hubspotAPIInput,
      email: email,
      company: companyName,
      name: name,
    };

    let requestOutcome = await fetch(
      "https://us-central1-sales-mentor-prod.cloudfunctions.net/crmQuality",
      {
        method: "POST",
        body: JSON.stringify(myRequest),
      }
    ).then(function (response) {
      if (response.ok) {
        setSendConfirmation("ok");
        console.log("OK!");
      } else {
        setSendConfirmation("Falha");

        console.log("Falha");
      }
    });

    return true;
  };

  // useEffect(() => {
  //   window.addEventListener("click");
  //   return () => {
  //     // cleanup;
  //   };
  // }, []);

  return (
    <div className={css.container}>
      {page === "Welcome" ? (
        <Welcome changePage={changePage} />
      ) : page === "Forms" ? (
        <Forms changePage={changePage} fetchData={fetchData} />
      ) : page === "Rules" ? (
        <Rules changePage={changePage} />
      ) : sendConfirmation === "Falha" ? (
        <NotSent changePage={changePage} />
      ) : sendConfirmation === "ok" ? (
        <Sent confirmDeliver={sendEmailTrigger} />
      ) : (
        <Loading confirmDeliver={sendEmailTrigger} />
      )}
    </div>
  );
}
