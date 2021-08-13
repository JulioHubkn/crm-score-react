import React, { useState, useEffect, cleanup } from "react";
import Welcome from "../Welcome/Welcome";
import Forms from "../Forms/Forms";
import Loading from "../Loading/Loading";
import Rules from "../Rules/Rules";
import Sent from "../Sent/Sent";
import M from "materialize-css";
import css from "./home.module.css";

export default function Home() {
  const [page, setPage] = useState("Welcome");
  // const [page, setPage] = useState("Forms");
  const [sendConfirmation, setSendConfirmation] = useState();

  const changePage = (page) => {
    setPage(page);
  };

  const sendEmailTrigger = () => {
    setSendConfirmation({ validate: true });
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
        <Forms changePage={changePage} />
      ) : page === "Rules" ? (
        <Rules changePage={changePage} />
      ) : !sendConfirmation ? (
        <Loading confirmDeliver={sendEmailTrigger} />
      ) : (
        <Sent confirmDeliver={sendEmailTrigger} />
      )}
    </div>
  );
}
