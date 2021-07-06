import { useState, useEffect } from "react";

import Image from "next/image";
import logo from "../../public/logo.png";
import back from "../../public/back.svg";

import PCScreen from "../PC/PCScreen";

import classes from "./Base.module.scss";

const Base = (props) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth >= 550) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  if (isMobile != true) return <PCScreen />;

  return (
    <main>
      <div className={classes.header}>
        {props.back && (
          <div className={classes.back} onClick={props.clickHandler}>
            <Image src={back} alt="go back" width={32} height={32} />
          </div>
        )}
        <div className={classes.logo}>
          <Image src={logo} alt="logo" width={125} height={125} quality={100} />
        </div>
      </div>

      <div className={classes.visual}>
        <Image
          src="/main-visual.png"
          alt="A mother holding her baby"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {props.children}
    </main>
  );
};

export default Base;