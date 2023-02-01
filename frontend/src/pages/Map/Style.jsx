import styled from "styled-components";

export default styled.section`
  .sky {
    height: 80vh;
    background: rgb(54, 167, 207);
    background: linear-gradient(
      177deg,
      rgba(54, 167, 207, 1) 0%,
      rgba(118, 208, 212, 1) 37%,
      rgba(0, 212, 255, 0.20211834733893552) 100%
    );
  }
  .cloud {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .cloudPicture {
    margin-top: 5vh;
    height: 15vh;
  }
  .navButton {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .shopPicture {
    margin-top: 15vh;
    height: 45vh;
  }
  .road {
    display: flex;
    flex-direction: row;
    height: 20vh;
    background: grey;
  }
  .carPicture {
    margin-left: 30vw;
    height: 20vh;
  }
`;
