/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const burgerColor = css`
  position: absolute;
  top: 2rem;
  left: 5rem;
  filter: brightness(0) saturate(100%) invert(9%) sepia(32%) saturate(2251%)
    hue-rotate(191deg) brightness(93%) contrast(108%);
  cursor: pointer;
`;

const Hamburger = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 37 23"
      className="hamburger"
      css={burgerColor}
      onClick={props.menuClick}
    >
      <path stroke="#fff" strokeWidth="3" d="M0 1.5L37 1.5"></path>
      <path stroke="#fff" strokeWidth="3" d="M0 11.5L29 11.5"></path>
      <path stroke="#fff" strokeWidth="3" d="M0 21.5L15 21.5"></path>
    </svg>
  );
};

export default Hamburger;
