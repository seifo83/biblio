import React, {Component}  from 'react';

class FormulairAdd extends Component {

     state = {
          titreSaisi: "",
          auteurSaisi: "",
          nbPagesSaisi: ""
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
                                   <button type="submit" className="col-4 btn btn-primary">Valider</button>
                              </div>
                         </form>
                         </div>
                    </div>
            </>

           );
     }
}

 export default FormulairAdd;