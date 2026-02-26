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

import UsersImage from "./assets/users.png";

function Home() {
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
              <Input type="text" placeholder="Nome do usuário" />
            </div>
            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do usuário" />
            </div>
          </ContainerInput>
          <div style={{ width: "100%" }}>
            <InputLabel>
              E-mail<span> *</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do usuário" />
          </div>
          <Button>Cadastrar Usuário</Button>
        </Form>
      </Container>
    </>
  );
}

export default Home;
