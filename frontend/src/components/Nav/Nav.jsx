import { Link } from "react-router-dom";
import Style from "./Style";

export default function Nav() {
  return (
    <Style>
      <h3 className="title">Fish Room</h3>
      <ul className="navlink">
        <Link to="/">
          <li>Acceuil</li>
        </Link>
        <Link to="/shop">
          <li>Magasin</li>
        </Link>
        <Link to="/inventory">
          <li>Inventaire</li>
        </Link>
        <li>Nourrir</li>
        <li>Nettoyer</li>
      </ul>
    </Style>
  );
}
