import React, { useEffect, useState } from "react";
import css from "./Loading.module.css";
import moment from "moment";
export default function Loading({ confirmDeliver }) {
  let countSeconds = 0;
  // const count = () => {
  //   countSeconds++;
  //   console.log(countSeconds + " vez(es)");
  //   if (countSeconds === 2) {
  //     change();
  //   }
  // };

  // let waitForData = setInterval(count, 3000);

  // function change() {
  //   confirmDeliver();
  // }

  return (
    <div className={css.box}>
      <div className={css.imgContainer}>
        {/* <img src="/hubkn_logo_branco.png"></img> */}
        <h3 className={css.pulsate}>Analisando os dados do seu hubspot</h3>
        <img src="/hubkn_simbolo.png"></img>
      </div>
      {/* <div className={css.subtitle}></div> */}
    </div>
  );
}
