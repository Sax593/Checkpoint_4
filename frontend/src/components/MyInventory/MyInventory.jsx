import ItemCard from "@components/ItemCard/ItemCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./Style";

export default function MyInventory() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/items`).then(({ data }) => {
      setItems(data);
    });
  }, []);
  return (
    <Style>
      {items.map((element) => {
        return <ItemCard key={element.id} itemData={element} />;
      })}
    </Style>
  );
}
