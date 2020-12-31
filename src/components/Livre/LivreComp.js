import React from 'react';
import Botton from  "../Bouton/BottonComp";

const livreComp = (props) => {
//console.log(props);
     return ( 
        <>
            <td>{props.titre}</td>
            <td>{props.auteur}</td>
            <td>{props.nbPages}</td>
            <td><Botton typeBtn ="btn-warning" clic = {()=> alert(" l'effet la fonction de clic modifier")}>Modifier</Botton></td>
            <td><Botton typeBtn ="btn-danger" clic={props.suppression}>Supprimer</Botton></td>
        </>
      );
 } 

export default livreComp;