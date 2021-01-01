import React, {Component}  from 'react';
import Botton from '../../components/Bouton/BottonComp'


class FormulairAdd extends Component {

     state = {
          titreSaisi: "",
          auteurSaisi: "",
          nbPagesSaisi: ""
     }
     handelValidationForm = (event) => {
          event.preventDefault()
     }
     render(){
          return(
            <>
                <h2 className="text-center text-primary"  style={{fontFamily:'Sigmar One'}} >Affichage du formulaire </h2>

                <div className="row justify-content-center">
                    <div className="col-8">
                         <form>
                              <div className="form-group">
                              <label className="col-form-label" for="titre">Titre du livre:</label>
                              <input type="text " 
                                      className="form-control" 
                                      id="titre"
                                      value = {this.state.titreSaisi}
                                      onChange= {(event)=> {this.setState({titreSaisi: event.target.value})}}
                                      />
                              </div>
                              <div className="form-group">
                              <label className="col-form-label" for="auteur">Auteur de livre:</label>
                              <input type="text "
                                      className="form-control"
                                      id="auteur"
                                      value = {this.state.auteurSaisi}
                                      onChange= {(event)=> {this.setState({auteurSaisi: event.target.value})}}
                                      />
                              </div>
                              <div className="form-group">
                              <label className="col-form-label" for="nbPages">Nombre de pages:</label>
                              <input type="number"
                                      className="form-control"
                                      id="nbPages"
                                      value = {this.state.nbPagesSaisi}
                                      onChange= {(event)=> {this.setState({nbPagesSaisi: event.target.value})}}
                                      />
                              </div>
                              <div className="form-group row justify-content-center">
                                   {/* <button type="submit" className="col-4 btn btn-primary">Valider</button> */}
                                   <Botton typeBtn="btn-primary" clic={this.handelValidationForm}> Valider </Botton>
                              </div>
                         </form>
                         </div>
                    </div>
            </>

           );
     }
}

 export default FormulairAdd;