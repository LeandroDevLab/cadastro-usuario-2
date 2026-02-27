import { useRef } from "react";
import api from "../../services/api";

import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInput,
  Input,
  Button,
  InputLabel,
} from "./styles";

import UsersImage from "../../assets/users.png";

function Home() {
  //useRef, criar uma referência em tempo real de algum lugar, no caso um input
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {
    const data = await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });
    console.log(data);
    //console.log(inputName.current.value);
  }

  return (
    <>
      <Container>
        <TopBackground>
          <img src={UsersImage} />
        </TopBackground>

        <Form>
          <Title>Ok React</Title>
          <ContainerInput>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              {/*                                 referência dentro do input */}
              <Input type="text" placeholder="Nome do usuário" ref={inputName} />
            </div>
            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
            </div>
          </ContainerInput>
          <div style={{ width: "100%" }}>
            <InputLabel>
              E-mail<span> *</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
          </div>
          <Button type="button" onClick={registerNewUser}>
            Cadastrar Usuário
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Home;
