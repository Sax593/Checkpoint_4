import styled from "styled-components";
import image from "@assets/font.png";

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  .cupboardPicture {
    margin-top: 50vh;
    height: 50vh;
  }
  .fishTankPicture {
    margin-top: 75vh;
    margin-right: 30vw;
    height: 20vh;
  }
`;
