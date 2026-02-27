import styled from "styled-components";

export const MyButton = styled.button`
  border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #7f3841 100%)"
      : "transparent"};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  border-radius: 30px;
  width: fit-content;
  transition: all 0.4s ease-in-out;

  &:hover {
    ${(props) =>
      props.theme === "primary" ? "opacity: 0.8;" : "background-color: #fff; color: #0000ff;"}
  }

  &:active {
    ${(props) =>
      props.theme === "primary"
        ? "opacity: 0.5;"
        : "background-color: #fff; color: #0000ff; opacity: 0.5;"}
  }
`;
