import MyInventory from "@components/MyInventory/MyInventory";
import Nav from "@components/Nav/Nav";

import Style from "./Style";

export default function Inventory() {
  return (
    <Style>
      <Nav />
      <MyInventory />
    </Style>
  );
}
