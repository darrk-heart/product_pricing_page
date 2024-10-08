import React from "react";
import styles from "./Background.module.css";
import Basic from "../Basic/Basic";
import Professional from "../Professional/Professional";
import Master from "../Master/Master";

function Background() {
  return (
    <div>
      <div>
        <h1>Our Pricing </h1>
        <div>
          <span>Annually</span>
          <div className={styles.radios}>
            <input type="radio" />
            <input type="radio" />
          </div>
          <span>Monthly</span>
        </div>
      </div>
      <Basic />
      <Professional />
      <Master />
    </div>
  );
}

export default Background;
