import propTypes from "prop-types";

import Style from "./Style";

export default function ItemCard({ itemData }) {
  return (
    <Style>
      <img className="itemPicture" src={itemData.picture} alt={itemData.name} />
      <div className="info">
        <p>{itemData.description}</p>
        <button className="addButton" type="button">
          Ajouter
        </button>
      </div>
    </Style>
  );
}

ItemCard.propTypes = {
  itemData: propTypes.shape({
    picture: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }).isRequired,
};
