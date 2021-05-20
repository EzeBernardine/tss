import { ButtonStyles } from "./styles";

const Button = (props) => {
  return (
    <ButtonStyles type={"text"} {...props}>
      {props.text}
    </ButtonStyles>
  );
};

export default Button;
