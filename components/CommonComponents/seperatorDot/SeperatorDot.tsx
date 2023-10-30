import React from "react";
import styles from "./SeperatorDot.module.scss";

const SeperatorDot = (props: any) => {
  const { children } = props;

  return (
    <div id="seperataDot" className="2xl:pt-[3rem] max-sm:px-2">    
      <ul className={`${styles.listdots} flex`}>
        {children}
      </ul>
    </div>
  );
};

export default SeperatorDot;
