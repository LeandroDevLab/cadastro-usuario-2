import styled from "styled-components";
import { FaPenSquare, FaRegTrashAlt, FaWindowClose } from "react-icons/fa";

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;
export const ContainerUpdate = styled.div`
  background-color: #252d48;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  min-height: 50vh;
  border-radius: 32px;
  position: fixed;
  top: 100px;
  left: auto;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    inset: 0px;
    border-radius: 32px;
    z-index: -1;
    /*     pointer-events: none;
 */
    animation: shadowTransition 4s linear infinite;
  }

  @keyframes shadowTransition {
    0%,
    100% {
      box-shadow: 4px 4px 14px #046af0;
    }
    25% {
      box-shadow: -4px 4px 14px #046af0;
    }
    50% {
      box-shadow: -4px -4px 14px #046af0;
    }
    75% {
      box-shadow: 4px -4px 14px #046af0;
    }
  }
`;

export const Fechar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  color: #ff0000;
  font-size: 24px;
  margin-right: 0;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const CardUsers = styled.div`
  padding: 16px;
  background-color: #252d48;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 380px;
  gap: 20px;

  h3 {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    text-transform: capitalize;
  }

  p {
    color: #fff;
    font-size: 14px;
    font-weight: 200;
  }

  @media (max-width: 400px) {
    gap: 4px;
  }
`;

export const Gonfigurators = styled.div`
  display: flex;
  gap: 2px;
`;

export const EditIcon = styled(FaPenSquare)`
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #00bfff;
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

export const TrashIcon = styled(FaRegTrashAlt)`
  font-size: 22px;
  color: #fff;
  width: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    color: #ff0000;
    transform: scale(1.1);
    transition: 0.2s;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const AvatarUser = styled.img`
  border-radius: 50%;
  height: 80px;
  background-color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  margin: auto;
`;

export const ContainerInput = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d2dae2;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
`;

export const InputLabel = styled.label`
  color: #fff;
  font-size: 12px;
  font-weight: 500px;

  span {
    color: #ff0000;
    font-weight: bold;
  }
`;
