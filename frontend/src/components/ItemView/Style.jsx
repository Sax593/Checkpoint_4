import styled from "styled-components";

export default styled.article`
  width: 20vw;
  height: 30vh;
  margin: 2rem;
  padding: 1rem;
  text-align: center;
  .itemPicture {
    margin: auto;
    height: 18vh;
  }
  .itemButton {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .info {
    visibility: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: start;
  }
  .infoVisible {
    visibility: visible;
  }
  .addButton {
    background-color: transparent;
    border: none;
    color: blue;
    border-radius: 5%;
    box-shadow: 12px 10px 29px 0px rgba(0, 0, 0, 0.75);
    height: 0.5rem;
  }
  p {
    padding: 0.5rem;
  }
`;
