import React from 'react';
import add from '../img/add.png';
import user from '../img/user.png'
// import './Button.scss';

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

const FrontBar = ({onChange} ) => (
<div >
{/* <form className="nav nav-tabs" id="nav-tab" role="tablist">
<input  className="form-control form-searcher" name="term" maxLength="16" onChange={onChange} placeholder="Buscar" />
<p className="icon-user">Nombre de usuario<img  src={user} alt="user"/></p>
</form> */}
 <div>
 <button className="btn add"><img src={add} alt=""/>Agregar documento</button>
 </div>
</div>
 );

 export default FrontBar;