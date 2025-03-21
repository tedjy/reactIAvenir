import React from "react";
import { motion } from "framer-motion";

export const InfiniteSlider = (props) => {
  if (!props.data) return <div>loading...</div>;

  const Slider = [...props.data, ...props.data]; // duplication pour le scroll infini

  return (
    <div id="Slider" className="text-center">
    <div className="container">
    <div className="col-md-8 col-md-offset-2 section-title">
      <h2>Entreprises partenaires</h2>
    </div>
    <div id="row">
    {/* Conteneur qui force une seule ligne */}
    <div className="">
      <motion.div
        className="sliderContent"
        initial={{x:"-15%"}}
        animate={{x: "-115%"}}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 30,
        }}
      >
        {Slider.map((d, i) => (
                <div key={`${d.name}-${i}`} className="cardsLine ">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="" />
  
                  </div>
                </div>
              ))}
              {Slider.map((d, i) => (
                <div key={`${d.name}-${i}`} className="cardsLine ">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
 
                  </div>
                </div>
              ))}
      </motion.div>
    </div>
    </div>
    </div>
  </div>
  );
};
