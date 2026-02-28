import PropTypes from "prop-types";
import { MyTitle } from "./styles";

export default function Title({ children }) {
  return <MyTitle>{children}</MyTitle>;
}

Title.PropTypes = {
  children: PropTypes.node.isRequired,
};
