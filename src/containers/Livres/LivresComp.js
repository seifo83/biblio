import React, {Component}  from 'react';
import LivreComp from '../../components/Livre/LivreComp'



class LivCompt extends Component {

     state = {
          livres : [
               {id:1, titre:"L'algorithmique selon H2PROG", auteur:"Matthieu GASTON", nbPages:200},
               {id:2, titre:"La France du 19ème", auteur: "Albert PATRICK", nbPages: 500},
               {id:3, titre:"Le monde des animaux", auteur: "Marc MERLIN", nbPages: 250},
               {id:4, titre:"Le Virus d'Asie", auteur: "Tya MILO", nbPages: 120},
  
          ]
      }

      render(){
            return( 

               <>
               <table className= "table text-center">
                    <thead className="thead-dark" >
                         <tr>
                              <th>Titre</th>
                              <th>Auteur</th>
                              <th>Nombre de pages</th>
                              <th colSpan="2">Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              this.state.livres.map(livre => {
                                   return(
                                        <tr key={livre.id}>
                                             <LivreComp>
                                                  titre = {livre.titre}
                                                  auteur = {livre.auteur}
                                                  nbPage = {livre.nbPage}

                                             </LivreComp>

                                            
                                        </tr>
                                   );
                              })
                         }

                    </tbody>
               </table>
          </>

             );
      }
}

export default LivCompt;
