import React from "react";
import BouncingLogo from "./logoBouncing";
<BouncingLogo/>
export const Header = (props) => {
  return (
    <header id="header">
      <div className="head">

        <div className="overlay">
          <div className="container">
            <div className="row">
            <BouncingLogo/>
              <div className=" logo ">

                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  En savoir plus
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
