import styled from "styled-components";
import image from "@assets/petshop.png";

export default styled.section`
  width: 85vw;
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
