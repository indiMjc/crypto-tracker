import { css } from "@emotion/core";

export default coinCard = css`
  display: flex;
  height: 15vh;
  width: 15vh;
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(-45deg, rgb(255, 255, 255), rgb(80, 80, 80));
  border-radius: 0.3rem;
  padding: 1vh;
  margin: 2vh 2vh 0;
  background: linear-gradient(45deg, rgb(255, 255, 255), rgb(80, 80, 80));
  box-shadow: 1rem 1rem 0.5rem rgba(0, 0, 0, 0.164);
  font-size: 2.6rem;
  transition: all 0.2s ease;
`;
