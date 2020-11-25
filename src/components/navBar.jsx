import React from 'react';
import '../style/dataTable.css'


const NavigationBar= ({order}) => {
  return(
  <div className="card nav">{order}</div> 
  )
}

export default NavigationBar;