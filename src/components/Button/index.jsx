import PropTypes from "prop-types";
import { MyButton } from "./styles";

function Button({ children, theme, ...props }) {
  //console.log(props);
  return (
    <MyButton {...props} theme={theme}>
      {children}
    </MyButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

export default Button;
