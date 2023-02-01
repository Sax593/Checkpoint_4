import cloud from "@assets/nuage.png";
import car from "@assets/tuture.png";
import shop from "@assets/petshop.png";
import house from "@assets/house.png";
import { Link } from "react-router-dom";
import Style from "./Style";

export default function Map() {
  return (
    <Style>
      <div className="sky">
        <div className="cloud">
          <img className="cloudPicture" src={cloud} alt="cloud" />
          <img className="cloudPicture" src={cloud} alt="cloud" />
          <img className="cloudPicture" src={cloud} alt="cloud" />
        </div>
        <div className="navButton">
          <Link to="/home">
            <img className="shopPicture" src={house} alt="House" />
          </Link>
          <Link to="/shop">
            <img className="shopPicture" src={shop} alt="Shop" />
          </Link>
        </div>
      </div>
      <div className="road">
        <img className="carPicture" src={car} alt="Car" />
      </div>
    </Style>
  );
}
