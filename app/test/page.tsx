"use client";
 
// chargement du SDK Crisp
import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react"; 
 
export default function Home() {
  const userLogout = () => {
    // Reset de la session Crisp
    Crisp.session.reset();
    // Suppression du token Crisp pour arrêter le bot
    Crisp.setTokenId();
 
    // ... Ajouter votre propre logique ici
  };
 
  const userLogin = () => {
    // ... Ajouter votre propre logique ici (récupératio du token de l'utilisateur connecté par exemple)
 
    // Configuration de Crisp (obligatoire pour utiliser le bot sur votre site)
    Crisp.configure(process.env.NEXT_PUBLIC_WEBSITE_ID || "", {
      autoload: true, 
    });
    // Récupération de l'historique d'une conversation Crisp
    Crisp.setTokenId("token");
    // Affichage du bot (utile uniquement si 'autoload: false' dans la configuration)
    Crisp.load();
    // Ouverture du bot
    Crisp.chat.open();
  }

  useEffect( () => {
    userLogin();
  }, []); 

  const showCarousel = () => {
    // Préparation d'un tableau pour le carousel (voir plus bas)
    const list = [
      {
        title: "Oeuvre 1",
        description: " tableau de ... ",
        actions: [
          {
            label: "Texte du bouton",
            url: "/oeuvre1",
          },
        ],
      },
      {
        title: "Oeuvre 2",
        description: " tableau de pablo ...",
        actions: [
          {
            label: "Texte du bouton",
            url: "/oeuvre2",
          },
        ],
      }
    ]
  
    // Affichage d'un carousel dans le bot
    Crisp.message.show("carousel", {
      text: "Voici la liste des oeuvres :",
      targets: list,
    });
  }

    return (
      <>
        <h1> Bienvenue sur la page Crisp de Dishanth ! </h1>

        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet fugiat non, sunt minima tempora impedit in molestias saepe quam perferendis maxime ab. Provident vel odit, nulla illum culpa similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, consectetur ex provident esse quis nisi quisquam ipsa quod expedita eaque veniam repudiandae minima itaque tenetur at aut. Necessitatibus, molestiae quis? 
        </p>  
        <button onClick={showCarousel}>Afficher le carousel</button>

      </>

    ); 
 
 
} 








