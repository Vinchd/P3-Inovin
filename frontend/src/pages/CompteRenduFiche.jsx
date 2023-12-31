import { Link } from "react-router-dom";
import { useChoice } from "@contexts/ChoiceContext";
import VinEnCours from "@components/VinEnCours";

function CompteRenduFiche() {
  const {
    selectNote,
    selectVueCouleur,
    selectVueLimpidite,
    selectVueDensite,
    selectNezIntensite,
    selectNezFruit,
    selectNezFleur,
    selectNezVegetal,
    selectNezEpice,
    selectNezAmpyreumatique,
    selectNezMineral,
    selectBouchePersistance,
    selectBoucheMoelleux,
    selectBoucheAcidite,
    selectBoucheTanin,
    selectBoucheAlcool,
    selectBoucheFruit,
    selectBoucheFleur,
    selectBoucheVegetal,
    selectBoucheEpice,
    selectBoucheAmpyreumatique,
    selectBoucheMineral,
  } = useChoice();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return (
    <div>
      <div className="md:px-[3rem] min-[950px]:px-[7.5rem]">
        <div className="flex justify-between text-xl pt-[2rem]">
          <h2>Fiche dégustation</h2>
          <h2>{`${day}/${month}/${year}`}</h2>
        </div>
        <div>
          <VinEnCours />
        </div>
        <div className="compteRendu max-sm:compteRenduMaxSm max-[500px]:compteRenduMin">
          <h2 className="font-bold uppercase text-[1.5rem] text-center borderGrid3 flex flex-col justify-center max-sm:borderGrid3MaxSm max-[500px]:borderGrid3Min">
            La note
          </h2>
          <p className="row-start-2 row-end-3 text-[1.7rem] text-center borderGrid2 flex flex-col justify-center max-sm:borderGrid2MaxSm max-[500px]:borderGrid2Min">
            {selectNote}/10
          </p>
          <h2 className="col-start-1 col-end-2 font-bold uppercase text-[1.5rem] text-center flex flex-col justify-center max-sm:col-start-2 max-sm:col-end-3 max-sm:row-start-1 max-sm:row-end-2">
            La vue
          </h2>
          <div className="col-start-1 col-end-2 text-[1.1rem] pl-[0.8rem] flex flex-col justify-center borderGrid1 max-sm:row-start-2 max-sm:row-end-2 max-sm:col-start-2 max-sm:col-end-3 max-sm:borderGrid1MaxSm max-[500px]:borderGrid1Min">
            <p>
              <span className="font-bold">Couleur :</span> {selectVueCouleur}
            </p>
            <p>
              <span className="font-bold">Limpidité :</span>{" "}
              {selectVueLimpidite}
            </p>
            <p>
              <span className="font-bold">Densité :</span> {selectVueDensite}
            </p>
          </div>
          <h2 className="col-start-2 col-end-3 row-start-1 row-end-2 font-bold uppercase text-[1.5rem] text-center flex flex-col justify-center max-sm:row-start-3 max-sm:row-end-4 max-sm:col-start-1 max-sm:col-end-3 max-[500px]:borderGrid5Min">
            Le nez
          </h2>
          <div className="row-start-2 row-end-5 text-[1.1rem] pl-[0.8rem] flex flex-col justify-center max-sm:row-start-4 max-sm:row-end-5 max-sm:col-start-1 max-sm:col-end-3">
            <p>
              <span className="font-bold">Intensité :</span>{" "}
              {selectNezIntensite}
            </p>
            <h3 className="text-[1.3rem] text-center pt-[0.4rem] pb-[0.4rem]">
              Familles aromatiques
            </h3>
            <p>
              <span className="font-bold">Fruits :</span> {selectNezFruit}
            </p>
            <p>
              <span className="font-bold">Fleurs :</span> {selectNezFleur}
            </p>
            <p>
              <span className="font-bold">Végétal :</span> {selectNezVegetal}
            </p>
            <p>
              <span className="font-bold">Épice :</span> {selectNezEpice}
            </p>
            <p>
              <span className="font-bold">Ampyreumatique :</span>{" "}
              {selectNezAmpyreumatique}
            </p>
            <p>
              <span className="font-bold">Minéral :</span> {selectNezMineral}
            </p>
          </div>
          <h2 className="col-start-1 col-end-3 row-start-5 row-end-6 font-bold uppercase text-[1.5rem] text-center borderGrid4 flex flex-col justify-center max-[500px]:borderGrid4Min">
            La bouche
          </h2>
          <div className="text-[1.1rem] pl-[0.8rem] flex flex-col justify-center">
            <p>
              <span className="font-bold">Persistance :</span>{" "}
              {selectBouchePersistance}
            </p>
            <p>
              <span className="font-bold">Moelleux :</span>{" "}
              {selectBoucheMoelleux}
            </p>
            <p>
              <span className="font-bold">Acidité :</span> {selectBoucheAcidite}
            </p>
            <p>
              <span className="font-bold">Tanin :</span> {selectBoucheTanin}
            </p>
            <p>
              <span className="font-bold">Alcool :</span> {selectBoucheAlcool}
            </p>
          </div>
          <div className="text-[1.1rem] pl-[0.8rem] flex flex-col justify-center">
            <h3 className="text-[1.3rem] text-center pb-[0.4rem]">
              Familles aromatiques
            </h3>
            <p>
              <span className="font-bold">Fruits :</span> {selectBoucheFruit}
            </p>
            <p>
              <span className="font-bold">Fleurs :</span> {selectBoucheFleur}
            </p>
            <p>
              <span className="font-bold">Végétal :</span> {selectBoucheVegetal}
            </p>
            <p>
              <span className="font-bold">Épice :</span> {selectBoucheEpice}
            </p>
            <p>
              <span className="font-bold">Ampyreumatique :</span>{" "}
              {selectBoucheAmpyreumatique}
            </p>
            <p>
              <span className="font-bold">Minéral :</span> {selectBoucheMineral}
            </p>
          </div>
        </div>
        <div className="flex justify-around pb-[4rem]">
          <Link to="/fiche/final">
            <button type="button" className="items-center">
              Précédent
            </button>
          </Link>
          <Link to="/profil/profil_degustation">
            <button type="button">Valider</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompteRenduFiche;
