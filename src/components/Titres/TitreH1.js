import React from 'react';

import classes from "./TitreH1.module.css"
//méthode 1: 

// const titreH1 = (props) => {
//     return (
//         <h1 className="border border-dark p-2 m-2 text-white text-center bg-primary rounded">{props.children}</h1>
//     );
// }


//méthode 2: avec return explicite 
// pour rajouter un CSS on a besoin de rajouter return 
// const titreH1 = (props) => (

//     <h1 className="border border-dark p-2 m-2 text-white text-center bg-primary rounded titreH1">{props.children}</h1>
// );

// la fonction sera modifier comme à la 1ere méthode 

const titreH1 = (props) => {
   const monCss = `${classes.policeTitre} border border-dark p-2 m-2 text-white text-center bg-primary rounded`
    return (
        <h1 className={monCss}>{props.children}</h1>
    );
}



export default titreH1;




