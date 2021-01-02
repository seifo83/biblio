import React from 'react';

const alert = (props) => {
    const mesCssClass = `alert ${props.typeAlert}`;
     return ( 
        <>
            <div class={mesCssClass} role="alert">
                {props.children}
            </div>
           </> 

      );
 } 

export default alert;