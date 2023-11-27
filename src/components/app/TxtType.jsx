// src/utils/typewriter.js
import React, { useEffect, useState } from "react";

const TxtType = ({ toRotate, period }) => {
  const [txt, setTxt] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  let loopNum = 0;

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    if (isDeleting) {
      setTxt((prevTxt) => prevTxt.substring(0, prevTxt.length - 1));
    } else {
      setTxt((prevTxt) => fullTxt.substring(0, prevTxt.length + 1));
    }

    var delta = 200 - Math.random() * 100;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && txt === fullTxt) {
      delta = period;
      setIsDeleting(true);
    } else if (isDeleting && txt === "") {
      setIsDeleting(false);
      loopNum++;
      delta = 500;
    }

    setTimeout(() => {
      tick();
    }, delta);
  };

  useEffect(() => {
    tick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures the effect runs only once

  return <span className="wrap">{txt}</span>;
};

export default TxtType;
