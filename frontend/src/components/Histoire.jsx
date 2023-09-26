import PropTypes from "prop-types";

const Histoire = ({
  labyrintheToggle,
  mauvaisGoutToggle,
  aLenver,
  zoomToggle,
}) => {
  const closeModal = () => {
    window.histoire.close();
  };
  return (
    <dialog
      id="histoire"
      className={`" modal min-w-96 h-[36rem]  " ${
        labyrintheToggle && "animate-spin-slow "
      } ${mauvaisGoutToggle && "text-white bg-yellow-200 bg-opacity-60"}
      ${aLenver && "rotate-180"} ${zoomToggle && " text-custom "}`}
    >
      <form
        method="dialog"
        className="modal-box bg-primary  mt-8 lg:mt-20 py-8 mx-4 lg:mx-16 px-4 lg:px-4 border-2 border-accent rounded-none"
      >
        <h1 className="font-megrim text-4xl lg:text-5xl font-bold lg:px-16 mb-4 text-center lg:text-left">
          Notre histoire
        </h1>
        <div className="rounded-box font-roboto text-lg lg:text-2xl">
          <p>
            Il y avait une époque où la Terre était le berceau de
            l&apos;humanité, mais une terrible épidémie avait changé le cours de
            l&apos;histoire. Une maladie inconnue s&apos;était répandue
            rapidement, mettant en danger la vie de millions de personnes. Les
            gouvernements et les scientifiques du monde entier s&apos;étaient
            efforcés de trouver un remède, mais leurs efforts étaient vains. La
            Terre ne pouvait plus être le foyer des humains.
          </p>
          <p>
            Les dirigeants mondiaux avaient pris la décision audacieuse de
            chercher une nouvelle planète habitable. Après de nombreuses années
            de recherche et de préparation, l&apos;humanité s&apos;était lancée
            dans un voyage épique à travers l&apos;espace. À bord de vastes
            vaisseaux spatiaux, les survivants avaient quitté la Terre pour
            chercher refuge ailleurs. Ils avaient emporté avec eux les
            connaissances accumulées au fil des siècles, ainsi que des
            échantillons de la biodiversité terrestre, dans l&apos;espoir de
            préserver leur patrimoine culturel et biologique. Le voyage spatial
            était long et périlleux.
          </p>
          <p>
            Pendant le trajet, certains passagers avaient contracté
            d&apos;étranges maladies dues aux conditions inhabituelles de
            l&apos;espace. Les médecins et les chercheurs à bord des vaisseaux
            avaient eu du mal à comprendre ces affections mystérieuses.
          </p>
          <p>
            La première maladie, baptisée Inversencéphalite, affectait la vision
            des malades. Leurs yeux étaient retournés, ce qui leur donnait une
            perspective étrange. Ils voyaient le monde à l&apos;envers, et cela
            les rendait désorientés et mal à l&apos;aise. Malheureusement, il
            n&apos;existait aucun remède pour cette affliction.
          </p>
          <p>
            La deuxième maladie, connue sous le nom de UltraZoomoculaire, avait
            transformé les yeux des malades en de gigantesques loupes. Tout ce
            qu&apos;ils regardaient était déformé et agrandi, ce qui rendait la
            perception de la réalité très difficile.
          </p>
          <p>
            La troisième maladie, appelée Oculovortex, avait déplacé les yeux
            des malades sur les côtés de leur tête. Ils ne pouvaient plus voir
            droit devant eux, ce qui compliquait leur vie quotidienne à bord du
            vaisseau.{" "}
          </p>
          <p>
            Enfin, la quatrième maladie, nommée Dyschromia Esthetica , avait
            altéré les sens des malades. Ils ne pouvaient plus distinguer ce qui
            était beau de ce qui ne l&apos;était pas, ni même apprécier les
            plaisirs sensoriels de la même manière que les autres. Ils étaient
            déconnectés du monde qui les entourait, vivant dans un état
            perpétuel d&apos;indifférence.{" "}
          </p>
          <p>
            Malgré ces maladies étranges et débilitantes, les survivants avaient
            atteint leur nouvelle planète. C&apos;était une planète étrange et
            merveilleuse, remplie de créatures et de paysages jamais vus
            auparavant. Pourtant, ceux qui étaient atteints de ces maladies
            vivaient dans un monde à part, chacun dans sa propre réalité
            altérée. Au fil des générations, les survivants avaient appris à
            s&apos;adapter à leur nouvelle vie sur cette planète étrangère. Ils
            avaient trouvé des moyens de communiquer et de collaborer malgré
            leurs différences perceptuelles.
          </p>
          <p>
            Ils avaient également découvert que la diversité de leurs
            expériences sensorielles apportait une richesse inestimable à leur
            culture. Alors que les années passaient, les maladies étranges de
            l&apos;espace étaient devenues une partie intégrante de la vie sur
            cette planète. Les survivants avaient appris à vivre en harmonie
            avec leurs altérations sensorielles, et ils avaient créé une société
            unique et fascinante où la perception du monde différait d&apos;une
            personne à l&apos;autre.
          </p>
          <p>
            Ainsi, sur cette nouvelle planète, les humains avaient appris que la
            beauté se trouvait dans la diversité, que la différence était une
            force et que la compréhension mutuelle était le socle de leur
            nouvelle civilisation. Malgré les défis, ils avaient trouvé un moyen
            de prospérer et de célébrer la singularité de chaque individu.
          </p>
        </div>
        <button
          type="button"
          onClick={closeModal}
          tabIndex={12}
          className="btn btn-sm btn-circle bg-primary border-accent text-accent font-bold hover:text-primary hover:bg-accent hover:border-none absolute right-2 top-2"
        >
          ✕
        </button>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={closeModal}>
          Fermer
        </button>
      </form>
    </dialog>
  );
};

Histoire.propTypes = {
  labyrintheToggle: PropTypes.bool.isRequired,
  mauvaisGoutToggle: PropTypes.bool.isRequired,
  zoomToggle: PropTypes.bool.isRequired,
  aLenver: PropTypes.bool.isRequired,
};

export default Histoire;
