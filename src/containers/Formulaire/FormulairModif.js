import React, {Component}  from 'react';
import Botton from '../../components/Bouton/BottonComp'

class formModif extends Component {
    state = {
        titreSaisi: this.props.titre,
        auteurSaisi: this.props.auteur,
        nbPagesSaisi: this.props.nbPage,

   };

    handelValidModif = (event)=> {
        //console.log("valider");
        event.preventDefault();
          console.log(this.state.titreSaisi + " " + this.state.auteurSaisi + " " + this.state.nbPagesSaisi   );
          this.props.recuperModifBook(this.props.id, this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi );
    };

     render(){
          return( 
                <>
                    <td><input type="text" className="form-control"  value={this.state.titreSaisi} onChange= {(event)=> {this.setState({titreSaisi: event.target.value})}}/></td>
                    <td> <input type="text" className="form-control"  value={this.state.auteurSaisi} onChange= {(event)=> {this.setState({auteurSaisi: event.target.value})}}/></td>
                    <td> <input type="number" className="form-control"  value={this.state.nbPagesSaisi} onChange= {(event)=> {this.setState({nbPagesSaisi: event.target.value})}}/> </td>
                    <td><Botton typeBtn ="btn-primary" clic={this.handelValidModif}>Valider</Botton></td>
                </>

           );
     };
}

 export default formModif;