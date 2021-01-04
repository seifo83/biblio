import React, {Component}  from 'react';
import Botton from '../../components/Bouton/BottonComp';
import {withFormik} from "formik";


class FormulairAdd extends Component {

     // state = {
     //      titreSaisi: "",
     //      auteurSaisi: "",
     //      nbPagesSaisi: "",

     // };
     // handleValidationForm = (event) => {
     //      event.preventDefault();
     //      console.log(this.state.titreSaisi + " " + this.state.auteurSaisi + " " + this.state.nbPagesSaisi   );
     //      this.props.recuperLivre(this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi );

     //      this.setState({
     //           titreSaisi: "",
     //           auteurSaisi: "",
     //           nbPagesSaisi: "",
     //      })
     // }
     render(){
          return(
            <>
                <h2 className="text-center text-primary"  style={{fontFamily:'Sigmar One'}} >Affichage du formulaire </h2>

                <div className="row justify-content-center">
                    <div className="col">
                         <form>
                              <div className="form-group">
                              <label className="col-form-label" htmlFor="titre">Titre du livre:</label>
                              <input type="text " 
                                      className="form-control" 
                                      id="titre"
                                      name="titre"
                                      value = {this.props.values.titre}
                                      onChange= {this.props.handleChange}
                                      onBlur = {this.props.handleBlur}
                                      />
                              {
                                   this.props.touched.titre && this.props.errors.titre 
                                        && <span style={{color:"red"}}>{this.props.errors.titre}</span> 
                                   }
                              </div>
                              <div className="form-group">
                              <label className="col-form-label" htmlFor="auteur">Auteur de livre:</label>
                              <input type="text "
                                      className="form-control"
                                      id="auteur"
                                      name="auteur"
                                      value = {this.props.values.auteur}
                                      onChange= {this.props.handleChange}
                                      onBlur = {this.props.handleBlur}
                                      />
                                   { 
                                        this.props.touched.auteur && this.props.errors.auteur 
                                             && <span style={{color:"red"}}>{this.props.errors.auteur}</span> 
                                      }
                              </div>
                              <div className="form-group">
                              <label className="col-form-label" htmlFor="nbPages">Nombre de pages:</label>
                              <input type="number"
                                      className="form-control"
                                      id="nbPages"
                                      name="nbPages"
                                      value = {this.props.values.nbPages}
                                      onChange= {this.props.handleChange}
                                      onBlur = {this.props.handleBlur}
                                      />
                                      {
                                        this.props.touched.nbPages && this.props.errors.nbPages 
                                           && <span style={{color:"red"}}>{this.props.errors.nbPages}</span> 
                                           }
                              </div>
                              <div className="form-group row justify-content-center">
                                   {/* <button type="submit" className="col-4 btn btn-primary">Valider</button> */}
                                   <Botton typeBtn="btn-primary"
                                             clic={this.props.handleSubmit}
                                             > Valider </Botton>
                              </div>
                         </form>
                         </div>
                    </div>
            </>

           );
     }
}

 export default withFormik({
     mapPropsToValues: () => ({
          titre: '',
          auteur: '',
          nbPages: '',
     }),
     validate: values => {
          const errors = {};
          if (values.titre.length < 3) {
               errors.titre = "le titre doit contenir plus que 3 caractéres"
          }
          if (values.titre.length > 15) {
               errors.titre = "le titre doit contenir moins que 15 caractéres"
          }
          if (!values.auteur) {
               errors.auteur = "le champs auteur est obligatoir"
          }
          if (!values.nbPages) {
               errors.nbPages= "le champs auteur est obligatoir"
          }
          return errors;

     },
     handleSubmit: (values,{props}) => {
               props.recuperLivre(values.titre, values.auteur, values.nbPages );


     }
 })(FormulairAdd);