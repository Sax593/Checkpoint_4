import { useState } from "react";
import propTypes from "prop-types";

import Style from "./Style";

export default function ItemView({ itemData }) {
  const [isVisible, setIsVisible] = useState(false);
  const hClick = (evt) => {
    evt.preventDefault();
    setIsVisible(!isVisible);
  };
  return (
    <Style>
      <button className="itemButton" type="button" onClick={hClick}>
        <img
          className="itemPicture"
          src={itemData.picture}
          alt={itemData.name}
        />
      </button>
      <div className={isVisible ? "infoVisible" : "info"}>
        <p>{itemData.name}</p>
        <p>{itemData.description}</p>
        <button className="addButton" type="button">
          Utiliser
        </button>
      </div>
    </Style>
  );
}

ItemView.propTypes = {
  itemData: propTypes.shape({
    id: propTypes.number.isRequired,
    picture: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }).isRequired,
};
