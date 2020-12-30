import React from 'react';
import Botton from  "../../components/Bouton/BottonComp";

const LivCompt = (props) => {

     return ( 

          <>
               <table className= "table text-center">
                    <thead>
                         <tr className="table-dark">
                              <th>Titre</th>
                              <th>Auteur</th>
                              <th>Nombre de pages</th>
                              <th colSpan="2">Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <td>titre 1</td>
                              <td>Auteur 1</td>
                              <td>222</td>
                              <td><Botton typeBtn ="btn-warning" clic = {()=> alert(" l'effet la fonction de clic modifier")}>Modifier</Botton></td>
                              <td><Botton typeBtn ="btn-danger" clic = {()=> alert(" l'effet la fonction de clic supprimer")}>Supprimer</Botton></td>
                         </tr>
                    </tbody>
               </table>
          </>

      );
 } 

export default LivCompt;
