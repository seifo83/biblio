import React, {Component}  from 'react';
import TitreH1 from "./components/Titres/TitreH1";
import Botton from  "./components/Bouton/BottonComp"
import LivresComp from "./containers/Livres/LivresComp"


class App extends Component {
   render(){
      return( 
        <>
          <TitreH1>Page Listant les livres</TitreH1>
          <LivresComp> </LivresComp>
          <Botton typeBtn ="btn-success" sizeBtn="w-100" clic = {()=> alert(" l'effet la fonction de clic du btn ajoute")}>Ajouter</Botton>
        </>

       );
   }
}

 export default App;
