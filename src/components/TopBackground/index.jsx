import { TopBackgroundStyle } from "./styles";
import UsersImage from "../../assets/users.png";

function TopBackground() {
  return (
    <>
      <TopBackgroundStyle>
        <img src={UsersImage} alt="imagem-usuarios" />;
      </TopBackgroundStyle>
    </>
  );
}

export default TopBackground;
