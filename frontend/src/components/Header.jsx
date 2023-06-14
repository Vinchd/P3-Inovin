import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [active, setActive] = useState("");
  const handleClick = () => {
    setActive(active === "" ? "active" : "");
  };
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="bg-primary h-24 w-full fixed z-30 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo/logo_white.png"
            className="pl-6 h-16 w-23"
            alt="Logo Inovin"
          />
          <span className="text-secondary text-2xl font-bold ml-4">INOVIN</span>
        </Link>
        <label className="burger absolute z-10 top-[25%] right-5 sm:hidden">
          <input
            type="checkbox"
            onChange={handleClick}
            checked={active === "active"}
          />
          <span>{}</span>
          <span>{}</span>
          <span>{}</span>
        </label>
        <nav className="hidden sm:flex z-20 items-center gap-10 mr-14 h-20">
          <Link
            to="/selection"
            className={`text-secondary w-[128px] text-center ${
              !isActive("/selection") ? "hover:underline" : ""
            } ${isActive("/selection") ? "active-nav" : ""}`}
          >
            Notre Sélection
          </Link>
          <Link
            to="/lexique"
            className={`text-secondary w-[72px] text-center ${
              !isActive("/lexique") ? "hover:underline" : ""
            } ${isActive("/lexique") ? "active-nav" : ""}`}
          >
            Lexique
          </Link>
          <Link
            to="/profil"
            className={`text-secondary w-[54px] text-center ${
              !isActive("/profil") ? "hover:underline" : ""
            } ${isActive("/profil") ? "active-nav" : ""}`}
          >
            Profil
          </Link>
        </nav>
      </header>
      <nav
        className={`sm:hidden flex flex-col z-20 py-10 absolute right-0 top-[96px] rounded-bl-md menu translate-y-[-110%] ${active} bg-primary items-center gap-10`}
      >
        <Link
          to="/selection"
          className={`text-secondary w-[128px] text-center ${
            !isActive("/selection") ? "hover:underline" : ""
          } ${isActive("/selection") ? "active-nav" : ""}`}
        >
          Notre Sélection
        </Link>
        <Link
          to="/lexique"
          className={`text-secondary w-[72px] text-center ${
            !isActive("/lexique") ? "hover:underline" : ""
          } ${isActive("/lexique") ? "active-nav" : ""}`}
        >
          Lexique
        </Link>
        <Link
          to="/profil"
          className={`text-secondary w-[54px] text-center ${
            !isActive("/profil") ? "hover:underline" : ""
          } ${isActive("/profil") ? "active-nav" : ""}`}
        >
          Profil
        </Link>
      </nav>
    </>
  );
}

export default Header;
