import React, {useContext} from "react";
import tgp from "../img/tgp.jpg";
import { AuthContext } from '../context/AuthContext';


const FrontBar = ({ searcher }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="front">
      {searcher}
      <div className="front-user">
        <p className="front-user-text">{currentUser && currentUser.displayName}</p>
        <img rounded className="front-tgp-logo" src={tgp} alt="userName" />
      </div>
    </div>
  )
};

export default FrontBar;
