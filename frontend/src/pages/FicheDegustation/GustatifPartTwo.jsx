import { useChoice } from "@contexts/ChoiceContext";
import { Link } from "react-router-dom";
import VinEnCours from "@components/VinEnCours";
import Select from "react-select";
import options from "../../helpers/gustatifHelper";

export default function GustatifPartTwo() {
  const {
    vinEnCours,
    setSelectBoucheFruit,
    setSelectBoucheFleur,
    setSelectBoucheVegetal,
    setSelectBoucheEpice,
    setSelectBoucheAmpyreumatique,
    setSelectBoucheMineral,
  } = useChoice();

  const handleFruitChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectBoucheFruit(string);
  };

  const handleFleurChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectBoucheFleur(string);
  };

  const handleVegetalChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectBoucheVegetal(string);
  };

  const handleEpiceChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectBoucheEpice(string);
  };

  const handleAmpyrChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectBoucheAmpyreumatique(string);
  };

  const handleMineralChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectBoucheMineral(string);
  };

  return (
    <>
      <VinEnCours />
      <div className="mt-4 flex flex-col items-center">
        <span className="w-full h-[1px] bg-secondary m-4" />
        <div>Caractère gustatif 2/2</div>
        <span className="w-full h-[1px] bg-secondary m-4 " />
        <div className="w-full flex flex-col gap-1">
          <div>Fruit</div>
          <Select
            isMulti
            name="fruit"
            options={
              vinEnCours.wineType === "rouge"
                ? options.fruitRougeOptions
                : options.fruitBlancOptions
            }
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleFruitChange}
          />
          <div className="mt-2">Fleur</div>
          <Select
            isMulti
            name="fleur"
            options={
              vinEnCours.wineType === "rouge"
                ? options.fleurRougeOptions
                : options.fleurBlancOptions
            }
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleFleurChange}
          />
          <div className="mt-2">Végétal</div>
          <Select
            isMulti
            name="vegetal"
            options={
              vinEnCours.wineType === "rouge"
                ? options.vegetalRougeOptions
                : options.vegetalBlancOptions
            }
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleVegetalChange}
          />
          <div className="mt-2">Épice</div>
          <Select
            isMulti
            name="epice"
            options={
              vinEnCours.wineType === "rouge"
                ? options.epiceRougeOptions
                : options.epiceBlancOptions
            }
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleEpiceChange}
          />
          <div className="mt-2">Ampyreumatique</div>
          <Select
            isMulti
            name="ampyr"
            options={
              vinEnCours.wineType === "rouge"
                ? options.ampyreumatiqueRougeOptions
                : options.ampyreumatiqueBlancOptions
            }
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleAmpyrChange}
          />
          <div className="mt-2">Minéral</div>
          <Select
            isMulti
            name="mineral"
            options={
              vinEnCours.wineType === "rouge"
                ? options.mineralRougeOptions
                : options.mineralBlancOptions
            }
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleMineralChange}
          />
        </div>
        <div className="w-full flex justify-center gap-4 my-4">
          <Link to="/selection">
            <button type="button">Retour à la sélection</button>
          </Link>
          <Link to="/fiche/gustatif-part1">
            <button type="button" className="items-center">
              Précédent
            </button>
          </Link>
          <Link to="/fiche/final">
            <button type="button">Suivant</button>
          </Link>
        </div>
      </div>
    </>
  );
}
