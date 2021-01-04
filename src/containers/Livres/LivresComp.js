import React, {Component}  from 'react';
import LivreComp from '../../components/Livre/LivreComp';
import FormulairAjout from '../Formulaire/FormulairAjout';
import FormulairModif from '../Formulaire/FormulairModif';
import Alert from '../../components/Alert/AlertComp';




class LivCompt extends Component {

     state = {
          livres : [
               {id:1, titre:"L'algorithmique selon H2PROG", auteur:"Matthieu GASTON", nbPages:200},
               {id:2, titre:"La France du 19ème", auteur: "Albert PATRICK", nbPages: 500},
               {id:3, titre:"Le monde des animaux", auteur: "Marc MERLIN", nbPages: 250},
               {id:4, titre:"Le Virus d'Asie", auteur: "Tya MILO", nbPages: 120},
          ],
          lastIdLivre : 4,
          IdModifBook: 0,
          alertSMS: null,
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

           this.setState({
                livres:newlivres,
                alertSMS: {
                    message : "suppression éffectuer",
                    type: "alert-danger"
               }
               });
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
                         lastIdLivre: oldState.lastIdLivre + 1,
                         alertSMS:{
                              message : "Livre Rajouter avec succée",
                              type: "alert-success"
                         } 

                    }
               });

               this.props.FermerFormuliare();

      }


      handleModifLivre = (id, titre, auteur, nbPages) => {
          //  console.log(id);
          // console.log(titre);
          // console.log(auteur);
          // console.log(nbPages);

          const caseLivre = this.state.livres.findIndex(ligne =>{
               return ligne.id === id;

          })

          const newBook = {
               id: id,
               titre: titre,
               auteur: auteur,
               nbPages: nbPages
          };

          const newTablivres = [...this.state.livres];
          newTablivres[caseLivre] = newBook

          this.setState({
               livres : newTablivres,
               IdModifBook: 0,
               alertSMS: {
                    message : "modifictaion éffectuer",
                    type: "alert-warning"
               }
          })



      }


      render(){
            return( 

               <>
               {this.state.alertSMS && <Alert typeAlert = {this.state.alertSMS.type}> {this.state.alertSMS.message}</Alert>}
               <div className="row justify-content-center">
                    <div className="col">
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
                                             if(livre.id !== this.state.IdModifBook){
                                             return(
                                                  <tr key={livre.id}>
                                                       <LivreComp
                                                            titre = {livre.titre}
                                                            auteur = {livre.auteur}
                                                            nbPage = {livre.nbPages}
                                                            suppression = {() => this.handleDeleteLivre(livre.id)}
                                                            modification = {() =>this.setState({IdModifBook :livre.id })}

                                                       />
                                                  </tr>
                                             );
                                             }else{
                                                  return( 
                                                       <tr key={livre.id}>

                                                            <FormulairModif
                                                                 id = {livre.id}
                                                                 titre = {livre.titre}
                                                                 auteur = {livre.auteur}
                                                                 nbPage = {livre.nbPages}
                                                                 recuperModifBook={this.handleModifLivre}
                                                            />
                                                       </tr>
                                                  
                                                  )}
                                        })
                                   }

                              </tbody>
                         </table>
                    </div>
               </div>
               {/*  !this.props.InfoAjoutLivre  ? <FormulairAjout /> : null */}
               { this.props.InfoAjoutLivre && <FormulairAjout recuperLivre={this.handleAddLivre} />}
          </>

             );
      }
}

export default LivCompt;

