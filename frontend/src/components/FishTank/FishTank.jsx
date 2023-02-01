import RedFish from "@assets/redFish.jpg";
import Style from "./Style";

export default function FishTank() {
  return (
    <Style>
      <img className="fishPicture" src={RedFish} alt="fish" />
    </Style>
  );
}
