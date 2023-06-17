

function Voitures() {
  return (
    <section className="voiture" id="voiture">
        <h2>Prêt à prendre la route ? Réservez dès aujourd'hui votre voiture parfaite avec Carrosse !</h2>
        <div className="cars">
          <div className="car cita">
          <img src="/voiture_seul.png" alt="citadine" />
            <div className="info">
              <h3>Les citadines</h3>
              <h4>Découvrez nos Peugeot 208 <br /> parfaites pour vos déplacements quotidiens.</h4>
              {/* <ul>
                <li>GPS</li>
                <li>Places</li>
                <li>Climatisation</li>
                <li>Boite manuelle</li>
                <li>Regulateur de vitesse</li>
                <li>Bluetooth</li>
              </ul> */}
              <div className="action">
                <button>Photos</button>
                <button>Détails</button>
                <button>Disponibilité</button>
              </div>
            </div>
          </div>
          <div className="car fami">
            <img src="/voiture_seul_bis.png" alt="Familiale" />
            <div className="info">
            <h3>Les Familiales</h3>
            <h4>Besoin d'un véhicule avec plus de place ? <br /> Nos Peugeot 2008 sont à votre disposition !</h4>
            {/* <ul>
              <li>GPS</li>
              <li>Places</li>
              <li>Climatisation</li>
              <li>Boite manuelle</li>
              <li>Regulateur de vitesse</li>
              <li>Bluetooth</li>
            </ul> */}
            <div className="action">
              <button>Photos</button>
              <button>Détails</button>
              <button>Disponibilité</button>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Voitures