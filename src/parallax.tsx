
import Parallax from 'parallax-js'
import { useEffect } from 'react';

function Parallaxing() {
    
    useEffect(() => {
        var scene = document.getElementById('scene');
        console.log(scene);
        
        if (scene) {
            var parallaxInstance = new Parallax(scene, {
            //   relativeInput: true,
            hoverOnly: true
            }); 
        }
      return () => {
        parallaxInstance.friction(0.2, 0.2);
      }
    }, [])
 
  return (
   <section className="banner">
    <div className="container" >
        <div data-relative-input="true" id="scene">
            <div className='layer' data-depth="0.2"><img src="/eau.png" alt="ciel" className="parallax eau"/></div>
            <div className='layer' data-depth="0.25"><img src="/sol.png" alt="ciel" className="parallax sol"/></div>
            <div className='layer' data-depth="0.15"><img src="/nuages.png" alt="ciel" className="parallax nuage"/></div>
            <div className='layer' data-depth="0.5"><img src="/soleil.png" alt="ciel" className="parallax soleil"/></div>
            <div className='layer' data-depth="0.35"><img src="/bateau.png" alt="ciel" className="parallax bateau"/></div>
            <div className='layer' data-depth="0.25"><img src="/phare.png" alt="ciel" className="parallax bateau"/></div>
            <div className='layer' data-depth="0.3"><img src="/ombre.png" alt="ciel" className="parallax ombre"/></div>
            <div className='layer' data-depth="0.32"><img src="/voiture.png" alt="ciel" className="parallax voitures"/></div>
            <div className='layer' data-depth="0.4"><img src="/goeland.png" alt="ciel" className="parallax goeland"/></div>
            <div className='layer' data-depth="0.05"><img src="/wifi_tel.png" alt="ciel" className="parallax wifi_tel"/></div>
            <div className='layer' data-depth="0.37"><img src="/wifi_voiture.png" alt="ciel" className="parallax wifi_voiture"/></div>
            <div className='layer' data-depth="0.5"><img src="/oiseau 2.png" alt="ciel" className="parallax oiseau"/></div>
          
            <div className='layer' data-depth="0.1"><img src="/oiseau 1.png" alt="ciel" className="parallax oiseau"/></div>
            <div className=' tel' data-depth="0">
                <div className="phone"  data-carousel>
                    <div className="carousel">
                        <ul className='cards' data-slides>
                            <li className="slide card active " data-active>
                                <div className="about">
                                    <span>1</span>
                                    <h4>Choisissez votre véhicule</h4>
                                    <h5>Parmi toute notre flotte de véhicules disponibles</h5>
                                </div>
                              
                            </li>
                            <li className="slide card " data-active >
                                <div className="about">
                                    <span>2</span>
                                    <h4>Réservez le sur GetAround</h4>
                                    <h5>Nous nous sommes associés à GetAround pour gérer les réservations !</h5>
                                </div>
                             
                            </li>
                            <li className="slide card " data-active>
                            <div className="about">
                                    <span>3</span>
                                    <h4>Récupérez votre véhicule</h4>
                                    <h5>Pas besoin de clé ! L'application vous permet de déverrouiller le véhicule.</h5>
                                </div>
                               
                            </li>
                            <li className="slide card" data-active>
                            <div className="about">
                                    <span>4</span>
                                    <h4>Retournez le véhicule</h4>
                                    <h5>Déposer le à l'endroit où vous l'avez récupéré à tout heure de la journée.</h5>
                                </div>
                               
                            </li>
                        </ul>
                    </div>
                </div>
                <img src="/main_crop.png" alt="ciel" className=" main"/>
            </div>
            <div className='layer' data-depth="0.32"><img src="/doit.png" alt="ciel" className="parallax doit"/></div>
        </div>
    </div>
    
        <button className="carousel-button prev prev-arrow" data-carousel-button="prev">étape précédente</button>
        <button className="carousel-button next next-arrow" data-carousel-button="next">étape suivante</button>
    <div className="text">
                <h1> Carrosse Location: <br /> La meilleure expérience de location de voiture en Bretagne.</h1>
                {/* <button><a href="#voiture">Les Voitures</a></button> */}
                <h2>Chez Carrosse, nous proposons une gamme de véhicules qui répondent aux besoins de tous. <br /> Des "citadines" idéales pour la conduite en ville aux "Familiales", spacieuses et parfaites pour les voyages en famille, nous avons ce qu'il vous faut.</h2>
               
                {/* <img src="/arrow rounded.gif" alt="" /> */}
               <div className="gif">
                <span>Comment ça marche ?</span>
                <iframe src="https://embed.lottiefiles.com/animation/82505"></iframe>
               </div>
            </div>
   </section>
  )
}

export default Parallaxing