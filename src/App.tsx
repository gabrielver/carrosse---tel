
import './App.css'
import How from './How'

import { useEffect } from "react";
import Parallaxing from './parallax';
import Voitures from './voitures';
import Team from './Team';


function App() {
 
  useEffect(() => {

    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    const cards = document.querySelectorAll(".card");

    if (prevArrow && nextArrow && cards.length > 1) {
      let activeIndex = 0;

      prevArrow.addEventListener("click", () => {
        cards[activeIndex].classList.remove("active");
        activeIndex = (activeIndex - 1 + cards.length) % cards.length;
        cards[activeIndex].classList.add("active");
      });

      nextArrow.addEventListener("click", () => {
        cards[activeIndex].classList.remove("active");
        activeIndex = (activeIndex + 1) % cards.length;
        cards[activeIndex].classList.add("active");
      });
    }

    const section1 = document.querySelector<HTMLElement>('.how');
    const main = document.querySelector<HTMLElement>('.main');
    const tel = document.querySelector<HTMLElement>('.tel');
    const doit = document.querySelector<HTMLElement>('.doit');
    const phone = document.querySelector<HTMLElement>('.phone');
    const carouselButtonsN = document.querySelector<HTMLElement>('.next');
    const carouselButtonsP = document.querySelector<HTMLElement>('.prev');
    const h2 = document.querySelector<HTMLElement>('.h2');

    if (
      section1 &&
      main &&
      tel &&
      doit &&
      phone &&
      carouselButtonsN &&
      carouselButtonsP &&
      h2
    ) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting === true) {
            main.style.top = '37.75% ';
            main.style.left = '28%';
            main.style.scale = '1';

            tel.style.scale="6"
  
            doit.style.top = '-60dvh';
            doit.style.left = '-190dvw';
            doit.style.scale = '6';

            phone.style.top = '35.75%';
            phone.style.left = '28%';

            carouselButtonsN.style.display = 'block';
            carouselButtonsP.style.display = 'block';
            
            h2.style.opacity = "1"
            h2.style.transform = "translate(0)"
          } else {
            main.style.top = '50%';
            main.style.left = '50%';
      
            tel.style.scale="1"
            tel.style.left = '51.5%'
            tel.style.top = '68%'

            doit.style.scale = '1';
            doit.style.top = '0';
            doit.style.left = '0';

            phone.style.top = '48%';
            phone.style.left = '50%';

            carouselButtonsN.style.display = 'none';
            carouselButtonsP.style.display = 'none';

            h2.style.opacity = "0"
            h2.style.transform = "translate(150%)"
          }
        },
        {
          threshold: 0.5,
        }
      );
      observer.observe(section1);
    }

    
const section2 = document.querySelector(".voiture");
const voitures = document.querySelector(".voitures");
const citadine  =document.querySelector('.cita');
const familiale = document.querySelector('.fami')

if (
  section2 &&
  main &&
  doit &&
  voitures &&
  phone &&
  citadine &&
  familiale  
) {
const observer2 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting === true) {

      main.style.opacity = "0";
      doit.style.opacity = "0";
      phone.style.opacity = "0";
      // main.style.display = "none";
      // doit.style.display = "none";
      // phone.style.display = "none";
      voitures.style.display = "none";
      citadine.style.transform= "translate(0)"
      familiale.style.transform= "translate(0)"
    } else {
      main.style.opacity = "1";
      doit.style.opacity = "1";
      phone.style.opacity = "1";
      // main.style.display = "block";
      // doit.style.display = "block";
      // phone.style.display = "block";
      voitures.style.display = "block";
    }
  },
  {
    threshold: 0.3,
  }
);
observer2.observe(section2);
}
  }, []);



  return (
    <>
    
    <Parallaxing/>
    <How/>
    <Voitures/>
    <Team/>x
    </>
  )
}

export default App
