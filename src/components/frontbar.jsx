import React from "react";
import add from "../img/add.png";
import user from "../img/user.png";


// const Button = ({ cName, onClick, img, text }) => (
//   <button
//     className={cName}
//     type="button"
//     onClick={onClick}
//   >
//     {img}
//     {text}
//   </button>
// );

// export default Button;

const FrontBar = ({searcher}) => (
  <div className="front">
      {searcher}
    <div className="front-user">
      <p className="front-user-text"> Nombre usuario</p>
      <img className="front-user-logo" src={user} alt="" />
    </div>
  </div>
);

export default FrontBar;
