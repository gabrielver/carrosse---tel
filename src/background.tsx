import { useEffect } from "react";
import "./background.css"

function Background() {
    // useEffect(() => {
    //     const parallax_el = document.querySelectorAll<HTMLElement>('.parallax');
    
    //     let xValue = 0,
    //       yValue = 0;
    
    //     const handleMouseMove = (e: MouseEvent) => {
    //       xValue = e.clientX - window.innerWidth / 2;
    //       yValue = e.clientY - window.innerHeight / 2;
    
    //       parallax_el.forEach((el: HTMLElement) => {
    //         let speedx = el.dataset.speedx ?? '0';
    //         let speedy = el.dataset.speedy ?? '0';
    //         el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    //       });
    //     };
    
    //     window.addEventListener('mousemove', handleMouseMove);
    
    //     return () => {
    //       window.removeEventListener('mousemove', handleMouseMove);
    //     };
    //   }, []);

// const parallax_el = document.querySelectorAll(".parallax");

// let xValue = 0,
//   yValue = 0;

// window.addEventListener("mousemove", (e) => {
//   xValue = e.clientX - window.innerWidth / 2;
//   yValue = e.clientY - window.innerHeight / 2;

//   parallax_el.forEach((el) => {
//     let speedx = el.dataset.speedx;
//     let speedy = el.dataset.speedy;
//     el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px))
//      translateY(calc(-50% + ${yValue * speedy}px))`;
//   });
// });

  return (
   <div className="bg" data-carousel>
    <div className="vignette"></div>
    <img src="/ciel-min.webp" alt="ciel" data-speedx="0.3" data-speedy="0.38" className="parallax bg-img"/>
    <img src="/eau-min.webp" alt="" data-speedx="0.27" data-speedy="0.32" className="parallax eau"/>
    <img src="/sol-min.webp" alt="" data-speedx="0.195" data-speedy="0.305" className="parallax sol"/>
    <img src="/nuage-min.webp" alt="" data-speedx="0.29" data-speedy="0.28" className="parallax nuage"/>
    <img src="/soleil-min.webp" alt="" data-speedx="0.125" data-speedy="0.155" className="parallax soleil"/>
    <img src="/bateau-min.webp" alt="" data-speedx="0.22" data-speedy="0.27" className="parallax bateau"/>
    <img src="/phare-min.webp" alt="" data-speedx="0.190" data-speedy="0.295"  className="parallax phare"/>
    <img src="/ombre voiture-min.webp" alt="" data-speedx="0.08" data-speedy="0.1" className="parallax ombre-voiture"/>
    <img src="/2 voitures-min.webp" alt="" data-speedx="0.06" data-speedy="0.1"  className="parallax voiture"/>
    <img src="/main_transparent.webp" alt="" data-speedx="0" data-speedy="0" className="parallax main"/>
    <img src="/main doit-min.webp" alt="" data-speedx="0.045" data-speedy="0.05" className="parallax doit"/>
    <div className="text parallax">
        <h1> Bienvenue en bretagne</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et modi fugit architecto quibusdam eaque vero ea. Ullam, molestiae. Incidunt repudiandae doloremque nam architecto velit unde totam perferendis asperiores quidem dolor iste autem, possimus vero.</span>
    </div>
    <div className="parallax phone">
        <div className="carousel">
            <ul data-slide>
                <li className="slide" data-active>
                    <span>Choisir</span>
                    {/* <img src="https://source.unsplash.com/78A265wPiO4" alt="" /> */}
                </li>
                <li className="slide" >
                    <span>Reserver</span>
                    {/* <img src="https://source.unsplash.com/78A265wPiO4" alt="" /> */}
                </li>
                <li className="slide" >
                    <span>Utiliser</span>
                    {/* <img src="https://source.unsplash.com/78A265wPiO4" alt="" /> */}
                </li>
                <li className="slide" e>
                    <span>Rendre</span>
                    {/* <img src="https://source.unsplash.com/78A265wPiO4" alt="" /> */}
                </li>
            </ul>
        </div>
    </div>
        <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
        <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
   </div>
  )
}

export default Background