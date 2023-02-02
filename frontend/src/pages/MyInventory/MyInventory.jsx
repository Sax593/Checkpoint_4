import ItemView from "@components/ItemView/ItemView";
import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./Style";

export default function MyInventory() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/possession/1`)
      .then(({ data }) => {
        setItems(data);
      });
  }, []);
  return (
    <Style>
      {items.map((element) => {
        return <ItemView key={element.id} itemData={element} />;
      })}
    </Style>
  );
}
