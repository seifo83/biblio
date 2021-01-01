import React, {Component}  from 'react';
import TitreH1 from "./components/Titres/TitreH1";
import Botton from  "./components/Bouton/BottonComp"
import LivresComp from "./containers/Livres/LivresComp"


class App extends Component {

  state ={
    ajoutLivre : false 
  }

  handleClickAjout = () => {
    //console.log("ajout d'un livre ");
    this.setState((oldstate, props) => {
      return {ajoutLivre: !oldstate.ajoutLivre}
    })
  }
   render(){
      return( 
        <>
          <div className="container">
            <TitreH1>Page Listant les livres</TitreH1>
            <LivresComp InfoAjoutLivre= {this.state.ajoutLivre} FermerFormuliare= {()=> this.setState({ajoutLivre:false})}/>
            <Botton 
              typeBtn ="btn-success"
              sizeBtn="w-100"
              clic = {this.handleClickAjout}>
              { !this.state.ajoutLivre ? "Ajouter" : "Fremer l'ajout"}
              </Botton>
            </div>
        </>

       );
   }
}

 export default App;
