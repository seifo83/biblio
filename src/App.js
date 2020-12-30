import React from "react";
import TitreH1 from "./components/Titres/TitreH1";
import Botton from  "./components/Bouton/BottonComp"

function App() {
  return (
    <>
       
      <TitreH1>Page Listant les livres</TitreH1>
      <p>Livres</p>
      <Botton typeBtn ="btn-success" clic = {()=> alert(" l'effet la fonction de clic du btn ajoute")}>Ajouter</Botton>
      <Botton typeBtn ="btn-warning" clic = {()=> alert(" l'effet la fonction de clic modifier")}>Modifier</Botton>
      <Botton typeBtn ="btn-danger" clic = {()=> alert(" l'effet la fonction de clic supprimer")}>Supprimer</Botton>

      
    </>
    
  );
}

export default App;
