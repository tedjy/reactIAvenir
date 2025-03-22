import React from "react";


export const InfiniteSlider = (props) => {
  if (!props.data) return <div>loading...</div>;

  const Slider = [...props.data, ...props.data , ...props.data, ...props.data]; // duplication pour le scroll infini

  return (
    <div id="slider" className="slider-container">
      <div className="container">
        <div className="section-title">
          <h2>Entreprises partenaires</h2>
        </div>

        {/* Conteneur du slider */}
        <div className="slider-wrapper">
          <div className="slider-track">
            {/* Duplication pour effet infini */}
            {Slider.concat(props.data).map((d, i) => (
              <div key={`${d.name}-${i}`} className="slide">
                <img src={d.img} alt={d.name} />
              </div>
            ))}
            {Slider.concat(props.data).map((d, i) => (
              <div key={`${d.name}-${i}`} className="slide">
                <img src={d.img} alt={d.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
