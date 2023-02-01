import Style from "./Style";

export default function Nav() {
  return (
    <Style>
      <h3 className="title">Fish Room</h3>
      <ul className="navlink">
        <li>Magasin</li>
        <li>Inventaire</li>
        <li>Nourrir</li>
        <li>Nettoyer</li>
      </ul>
    </Style>
  );
}
