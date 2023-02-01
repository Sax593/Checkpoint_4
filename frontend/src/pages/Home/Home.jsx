import MyHouse from "@components/MyHouse/MyHouse";
import Nav from "@components/Nav/Nav";
import Style from "./Style";

export default function Home() {
  return (
    <Style>
      <Nav />
      <MyHouse />
    </Style>
  );
}
