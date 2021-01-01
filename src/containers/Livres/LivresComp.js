import React, {Component}  from 'react';
import LivreComp from '../../components/Livre/LivreComp';
import FormulairAjout from '../Formulaire/FormulairAjout';



class LivCompt extends Component {

     state = {
          livres : [
               {id:1, titre:"L'algorithmique selon H2PROG", auteur:"Matthieu GASTON", nbPages:200},
               {id:2, titre:"La France du 19ème", auteur: "Albert PATRICK", nbPages: 500},
               {id:3, titre:"Le monde des animaux", auteur: "Marc MERLIN", nbPages: 250},
               {id:4, titre:"Le Virus d'Asie", auteur: "Tya MILO", nbPages: 120},
  
          ],
          lastIdLivre : 4,
      }

      //1-  fonction pour supprimer un livre 
      handleDeleteLivre = (id) => {
           //console.log("suppression" + id);
           const livreInxdexTab = this.state.livres.findIndex(ligne =>{
                return ligne.id === id;

           })
          //console.log(livreInxdexTab);`

           const newlivres = [...this.state.livres];
           newlivres.splice(livreInxdexTab, 1);

           this.setState({livres:newlivres});
      }
      //2- fonction pour rajouter un livre à partir d'un formuliare 
      handleAddLivre = (titre, auteur, nbPages) => {
           console.log(titre);
           console.log(auteur);
           console.log(nbPages);
           const newBook = {
                    id: this.state.lastIdLivre + 1,
                    titre: titre,
                    auteur: auteur,
                    nbPages: nbPages
               };
               const newTablivres = [...this.state.livres];
               newTablivres.push(newBook);
               this.setState((oldState, props)=> {
                    return{
                         livres:newTablivres,
                         lastIdLivre: oldState.lastIdLivre + 1

                    }
               });

      }


      render(){
            return( 

               <>
               <div className="row justify-content-center">
                    <div className="col-8">
                         <table className= "table table-responsive text-center">
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
                                                       <LivreComp
                                                            titre = {livre.titre}
                                                            auteur = {livre.auteur}
                                                            nbPage = {livre.nbPage}
                                                            suppression = {() => this.handleDeleteLivre(livre.id)}

                                                       />

                                                  
                                                  </tr>
                                             );
                                        })
                                   }

                              </tbody>
                         </table>
                    </div>
               </div>
               
               {/*  !this.props.InfoAjoutLivre  ? <FormulairAjout /> : null */}
               { this.props.InfoAjoutLivre  && <FormulairAjout recuperLivre={this.handleAddLivre} />}
          </>

             );
      }
}

export default LivCompt;

