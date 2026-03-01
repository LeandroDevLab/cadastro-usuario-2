import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import api from "../../services/api";
import Title from "../../components/Title";
import {
  ContainerUsers,
  CardUsers,
  TrashIcon,
  Container,
  AvatarUser,
  ContainerUpdate,
  ContainerInput,
  InputLabel,
  Input,
  Fechar,
  Form,
  EditIcon,
} from "./styles";

import { FaWindowClose } from "react-icons/fa";

function ListUsers() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [userEditing, setUserEditing] = useState(null);

  // TODA VEZ que a tela carrega, o useEffect é chamado
  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data.data);
    }
    getUsers();
  }, []); // TODA VEZ que uma determinada variável MUDAR de valor, ele é chamado

  //DELETE
  async function deleteUser(id) {
    await api.delete(`/usuarios/${id}`);

    const newListUsers = users.filter((user) => user.id !== id);

    setUsers(newListUsers);
  }

  //UPDATE
  function openUpdateModal(user) {
    setUserEditing(user);
    setIsOpen(true);

    inputName.current.value = user.name;
    inputAge.current.value = user.age;
    inputEmail.current.value = user.email;
  }

  async function updateUser() {
    await api.put(`/usuarios/${userEditing.id}`, {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      email: inputEmail.current.value,
    });

    const updatedUsers = users.map((user) =>
      user.id === userEditing.id
        ? {
            ...user,
            name: inputName.current.value,
            age: Number(inputAge.current.value),
            email: inputEmail.current.value,
          }
        : user,
    );

    setUsers(updatedUsers);
    setIsOpen(false);
  }

  return (
    <Container>
      <ContainerUpdate $isOpen={isOpen}>
        <Fechar>
          <FaWindowClose onClick={() => setIsOpen(false)} />
        </Fechar>
        <Form>
          <Title>Editar Usuário</Title>
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
          <Button type="button" onClick={updateUser} theme="primary">
            Editar Usuário
          </Button>
        </Form>
      </ContainerUpdate>

      <TopBackground />
      <Title>Listagem de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://robohash.org/${user.id}`} />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon onClick={() => deleteUser(user.id)} />
            <EditIcon onClick={() => openUpdateModal(user)} />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
