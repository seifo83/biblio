import React from 'react';
import Botton from  "../Bouton/BottonComp";

const livreComp = (props) => {
//console.log(props);
     return ( 
        <>
            <td>{props.titre}</td>
            <td>{props.auteur}</td>
            <td>{props.nbPage}</td>
            <td><Botton typeBtn ="btn-warning" clic={props.modification}>Modifier</Botton></td>
            <td><Botton typeBtn ="btn-danger" clic={props.suppression}>Supprimer</Botton></td>
        </>
      );
 } 

export default livreComp;