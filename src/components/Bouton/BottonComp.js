import React from 'react';

const buttCompent = (props) => {
    const btnCss = `btn ${props.typeBtn} ${props.sizeBtn}`
     return ( 
            <button className={btnCss} onClick={props.clic} > {props.children}</button>

      );
 } 

export default buttCompent;