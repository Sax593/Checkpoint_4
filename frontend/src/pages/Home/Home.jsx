import cupboard from "@assets/armoire.png";
import door from "@assets/door.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Style";

export default function Home() {
  const [isUsed] = useState(
    "https://media.discordapp.net/attachments/1070624054719021056/1070626671809531936/Aquarium_rond.png"
  );
  return (
    <Style>
      <div className="door">
        <Link to="/">
          <img src={door} alt="doorPicture" />
        </Link>
      </div>
      <img className="fishTankPicture" src={isUsed} alt="FishTankPicture" />
      <div className="cupboard">
        <Link to="/inventory">
          <img
            className="cupboardPicture"
            src={cupboard}
            alt="cupboardPicture"
          />
        </Link>
      </div>
    </Style>
  );
}
