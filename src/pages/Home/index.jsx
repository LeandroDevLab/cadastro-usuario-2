import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import { Title, Container, Form, ContainerInput, Input, InputLabel } from "./styles";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";

function Home() {
  //useRef, criar uma referência em tempo real de algum lugar, no caso um input
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

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
        <TopBackground />

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
          <Button type="button" onClick={registerNewUser} theme="primary">
            Cadastrar Usuário
          </Button>
        </Form>
        {/* Funções com parametro precisam ser inseridos como o returno de uma arrow fuction */}
        <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
          Ver lista de Usuários
        </Button>
      </Container>
    </>
  );
}

export default Home;
