import "./IntroPage.css";

import info from "./../../../assets/info.jpg";

function IntroPage() {
  return (
    <div className="intro">
      <h1>Välkommen till Beatas hunddagis personalsida!</h1>

      <p>Navigera sidan via knapparna ovan.</p>
      <div className="row">
        <p className="bold">Gäster: </p>
        <p>
          Här kan du se alla hundar som är kunder just nu. Klicka på en bild för
          att se mer information.
        </p>
      </div>
      <div className="row">
        <p className="bold">Register:</p>
        <p>Se alla nuvarande och tidigare kunder samt ägarinformation.</p>
      </div>
      <a href={info} target="_blank" rel="noopener noreferrer">
        <img src={info} />
      </a>
    </div>
  );
}

export default IntroPage;
