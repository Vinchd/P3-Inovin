import { useEffect, useState } from "react";
import VinEnCours from "@components/VinEnCours";

export default function Visuel() {
  const [couleur, setCouleur] = useState("-");
  const [limpidite, setLimpidite] = useState("-");
  const [densite, setDensite] = useState("-");
  const [visuelVin, setVisuelVin] = useState({
    couleur: "-",
    limpidite: "-",
    densite: "-",
  });

  const handleColorClick = () => {
    const couleurClass = document.getElementById("couleur");
    const limpiditeClass = document.getElementById("limpidite");
    const densiteClass = document.getElementById("densite");
    couleurClass.classList.toggle("hidden");
    if (limpiditeClass.classList.value !== "hidden") {
      limpiditeClass.classList.toggle("hidden");
    }
    if (densiteClass.classList.value !== "hidden") {
      densiteClass.classList.toggle("hidden");
    }
  };

  const handleLimpiditeClick = () => {
    const couleurClass = document.getElementById("couleur");
    const limpiditeClass = document.getElementById("limpidite");
    const densiteClass = document.getElementById("densite");
    limpiditeClass.classList.toggle("hidden");
    if (couleurClass.classList.value !== "hidden") {
      couleurClass.classList.toggle("hidden");
    }
    if (densiteClass.classList.value !== "hidden") {
      densiteClass.classList.toggle("hidden");
    }
  };

  const handleDensiteClick = () => {
    const couleurClass = document.getElementById("couleur");
    const limpiditeClass = document.getElementById("limpidite");
    const densiteClass = document.getElementById("densite");
    densiteClass.classList.toggle("hidden");
    if (couleurClass.classList.value !== "hidden") {
      couleurClass.classList.toggle("hidden");
    }
    if (limpiditeClass.classList.value !== "hidden") {
      limpiditeClass.classList.toggle("hidden");
    }
  };

  const handleSelectionClick = () => {
    if (document.querySelector("input[name=densite]:checked") !== null) {
      setDensite(document.querySelector("input[name=densite]:checked").id);
    }
    if (document.querySelector("input[name=limpidite]:checked") !== null) {
      setLimpidite(document.querySelector("input[name=limpidite]:checked").id);
    }
    if (document.querySelector("input[name=couleur]:checked") !== null) {
      setCouleur(document.querySelector("input[name=couleur]:checked").id);
    }
  };

  useEffect(() => {
    setVisuelVin({ couleur, limpidite, densite });
  }, [densite, limpidite, couleur]);

  return (
    <>
      <VinEnCours />
      <div className="mt-4 flex flex-col items-center">
        <span className="w-full h-[1px] bg-secondary m-4" />
        <div>Caractère visuel</div>
        <span className="w-full h-[1px] bg-secondary m-4 " />
        <form className="flex flex-col gap-6 justify-center w-3/4" action="">
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="">
              <input
                type="button"
                onClick={handleColorClick}
                value={
                  visuelVin.couleur !== "-"
                    ? `Couleur : ${visuelVin.couleur}`
                    : "Couleur : -"
                }
                className="fiche-deg-button p-2 w-full"
              />
              <div id="couleur" className="hidden">
                <div className="flex flex-row gap-10 mb-2 items-center justify-center">
                  <div className="flex flex-col gap-4 my-2">
                    <div className="bg-[#4A0019] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="quasi-noir"
                      />
                      <label className="mr-2" htmlFor="quasi-noir">
                        quasi-noir
                      </label>
                    </div>
                    <div className="bg-[#A70045] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="pourpre"
                      />
                      <label className="mr-2" htmlFor="pourpre">
                        pourpre
                      </label>
                    </div>
                    <div className="bg-[#9C0063] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="violet"
                      />
                      <label className="mr-2" htmlFor="violet">
                        violet
                      </label>
                    </div>
                    <div className="bg-[#7E2950] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="grenat"
                      />
                      <label className="mr-2" htmlFor="grenat">
                        grenat
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#FC1D5C] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="framboise"
                      />
                      <label className="mr-2" htmlFor="framboise">
                        framboise
                      </label>
                    </div>
                    <div className="bg-[#EA0428] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="cerise"
                      />
                      <label className="mr-2" htmlFor="cerise">
                        cerise
                      </label>
                    </div>
                    <div className="bg-[#C70400] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="rubis"
                      />
                      <label className="mr-2" htmlFor="rubis">
                        rubis
                      </label>
                    </div>
                    <div className="bg-[#972000] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="tuile"
                      />
                      <label className="mr-2" htmlFor="tuile">
                        tuilé
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="flex flex-col items-center">
              <input
                type="button"
                onClick={handleLimpiditeClick}
                value={
                  visuelVin.limpidite !== "-"
                    ? `Limpidité : ${visuelVin.limpidite}`
                    : "Limpidité : -"
                }
                className="fiche-deg-button p-2 w-full"
              />
              <div id="limpidite" className="hidden">
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="limpidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="pale"
                  />
                  <label className="mr-2" htmlFor="pale">
                    Pale
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="limpidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="clair"
                  />
                  <label className="mr-2" htmlFor="clair">
                    Clair
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="limpidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="soutenu"
                  />
                  <label className="mr-2" htmlFor="soutenu">
                    Soutenu
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="limpidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="fonce"
                  />
                  <label className="mr-2" htmlFor="fonce">
                    Foncé
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="limpidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="opaque"
                  />
                  <label className="mr-2" htmlFor="opaque">
                    Opaque
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="flex flex-col items-center">
              <input
                type="button"
                onClick={handleDensiteClick}
                value={
                  visuelVin.densite !== "-"
                    ? `Densité : ${visuelVin.densite}`
                    : "Densité : -"
                }
                className="fiche-deg-button p-2 w-full"
              />
              <div id="densite" className="hidden">
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="densite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="visqueuses"
                  />
                  <label className="mr-2" htmlFor="visqueuses">
                    Larmes visqueuses
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="densite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="grasses"
                  />
                  <label className="mr-2" htmlFor="grasses">
                    Larmes grasses
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="densite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="coulantes"
                  />
                  <label className="mr-2" htmlFor="coulantes">
                    Larmes coulantes
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="densite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="fluides"
                  />
                  <label className="mr-2" htmlFor="fluides">
                    Larmes fluides
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="absolute w-[400px] right-[calc(50%-200px)] bottom-8 flex justify-center gap-4">
            <button type="button">Retour au catalogue</button>
            <button type="button">Suivant</button>
          </div>
        </form>
      </div>
    </>
  );
}