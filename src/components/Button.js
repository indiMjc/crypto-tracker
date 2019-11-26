/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

// const buttonStyles = css`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-decoration: none;

//   .button-container {
//     margin: 0;
//     padding: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 7.2rem;

//     .button-filter {
//       height: 100%;
//       display: flex;
//       align-items: center;
//       background-color: rgba(255, 255, 255, 0.1);

//       .button-text {
//         border-top: 2rem solid transparent;
//         border-bottom: 2rem solid transparent;
//         border-right: 5rem solid transparent;
//         border-left: 5rem solid transparent;
//         width: 100%;
//         text-decoration: none;
//         color: @button-text;
//         text-shadow: -1.5px -1.5px 0 #000, 1.5px 1.5px 0 #000, 0 -1.5px 0 #000,
//           0 1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000,
//           1.5px 0 0 #000, -1.5px 0 0 #000;
//         font-size: 3.2rem;
//         font-family: sans-serif;
//         letter-spacing: 0.4rem;
//       }
//     }

//     &:before {
//         content: "";
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 50%;
//         height: 100%;
//         background: rgba(255, 255, 255, 0.1);
//       }

//       &:after {
//         content: "";
//         position: absolute;
//         top: 0;
//         left: -100%;
//         width: 100%;
//         height: 100%;
//         background: linear-gradient(
//           90deg,
//           transparent,
//           rgba(255, 255, 255, 0.4),
//           transparent
//         );
//         transition: 0.4s;
//         transition-delay: 0.2s;
//       }

//       &:hover:after {
//         left: 100%;
//       }

//       span {
//         position: absolute;
//         display: block;
//         transition: 0.5s ease;

//         &:nth-child(1) {
//           top: 0;
//           left: 0;
//           width: 0;
//           height: 1.5px;
//           background-color: #fff;
//         }

//         &:nth-child(2) {
//           top: 0;
//           left: 0;
//           width: 1.5px;
//           height: 0;
//           background-color: #fff;
//         }

//         &:nth-child(3) {
//           bottom: 0;
//           right: 0;
//           width: 0;
//           height: 1.5px;
//           background-color: #fff;
//         }

//         &:nth-child(4) {
//           bottom: 0;
//           right: 0;
//           width: 1.5px;
//           height: 0;
//           background-color: #fff;
//         }
//       }

//       &:hover span:nth-child(1) {
//         width: 100%;
//         transform: translateX(100%);
//       }

//       &:hover span:nth-child(2) {
//         height: 100%;
//         transform: translateY(100%);
//       }

//       &:hover span:nth-child(3) {
//         width: 100%;
//         transform: translateX(-100%);
//       }

//       &:hover span:nth-child(4) {
//         height: 100%;
//         transform: translateY(-100%);
//       }
//     }
//   }
// `;

const Button = props => {
  return (
    <span className="button">
      <Link to={props.location} className="button-link">
        <div className="button-container">
          <div className="span-parent">
            <span />
            <span />
            <span />
            <span />
            <div className="button-filter">
              <div className="button-text">{props.text}</div>
            </div>
          </div>
        </div>
      </Link>
    </span>
  );
};

export default Button;
