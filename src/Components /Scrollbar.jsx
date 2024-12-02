import React, { useEffect, useRef } from "react";
import "./Scrollbar.css";


import Icon1 from "../assets/Dot-Net.png";
import Icon2 from "../assets/Java.png";
import Icon3 from "../assets/Angular.png";
import Icon4 from "../assets/React.png";
import Icon5 from "../assets/Andriod.png";
import Icon6 from "../assets/IOS.png";
import Icon7 from "../assets/ML-Dot-NET.png";
import Icon8 from "../assets/TebsoFlow.png";
import Icon9 from "../assets/Torch.png";
import Icon10 from "../assets/Selineum.png";

const ScrollingIcons = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollIcons = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    };
    const interval = setInterval(scrollIcons, 60); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scrolling-icons-container" ref={scrollRef}>
      <div className="scrolling-icons">
        <img src={Icon1} alt="Icon 1" />
        <img src={Icon2} alt="Icon 2" />
        <img src={Icon3} alt="Icon 3" />
        <img src={Icon4} alt="Icon 4" />
        <img src={Icon5} alt="Icon 5" />
        <img src={Icon6} alt="Icon 6" />
        <img src={Icon7} alt="Icon 7" />
        <img src={Icon8} alt="Icon 8" />
        <img src={Icon9} alt="Icon 9" />
        <img src={Icon10} alt="Icon 10" />
       
      </div>
    </div>
  );
};

export default ScrollingIcons;
