import BlueFish from "@assets/blueFish.png";

import Style from "./Style";

export default function ItemCard() {
  return (
    <Style>
      <img className="itemPicture" src={BlueFish} alt="item pictures" />
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          temporibus veniam! Ab, aut provident.
        </p>
        <button className="addButton" type="button">
          Ajouter
        </button>
      </div>
    </Style>
  );
}
