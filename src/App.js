import React, {Component}  from 'react';
import TitreH1 from "./components/Titres/TitreH1";
import Botton from  "./components/Bouton/BottonComp"
import LivresComp from "./containers/Livres/LivresComp"


class App extends Component {

  state ={
    ajoutLivre : true 
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
          <TitreH1>Page Listant les livres</TitreH1>
          <LivresComp> </LivresComp>
          <Botton 
            typeBtn ="btn-success" 
            sizeBtn="w-100" 
            clic = {this.handleClickAjout}>
            {this.state.ajoutLivre ? "Ajouter" : "Fremer l'ajout"}
            </Botton>
        </>

       );
   }
}

 export default App;
