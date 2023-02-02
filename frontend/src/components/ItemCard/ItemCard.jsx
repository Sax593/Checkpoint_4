import axios from "axios";
import { useState } from "react";
import propTypes from "prop-types";

import Style from "./Style";

export default function ItemCard({ itemData }) {
  const [data] = useState({
    users_id: 1,
    items_id: itemData.id,
    quantity: 1,
  });
  const hClick = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/possession`, data);
  };
  return (
    <Style>
      <img className="itemPicture" src={itemData.picture} alt={itemData.name} />
      <div className="info">
        <p>{itemData.description}</p>
        <button className="addButton" type="button" onClick={hClick}>
          Ajouter
        </button>
      </div>
    </Style>
  );
}

ItemCard.propTypes = {
  itemData: propTypes.shape({
    id: propTypes.number.isRequired,
    picture: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }).isRequired,
};
