import { ButtonIcon, ContainerOne, ContainerTwo, InputContainer, Main, TableComponent } from './styles'
import { Header } from '../../components/Header'
import { useStatePage } from '../../hooks/statePage'
import { Input } from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdAddCircleOutline, IoMdReturnLeft } from "react-icons/io";
import { Button } from '../../components/Button'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs';

export function Students() {
  const { statePage } = useStatePage()
  const [students, setStudents] = useState([])
  const [search, setSearch] = useState("")
  const [state, setState] = useState(false)
  const navigate = useNavigate()

  function formatDate(dateString) {
    const dateObject = dayjs(dateString);

    const formattedDate = dateObject.format('DD/MM/YYYY');

    return formattedDate;
  };

  function handleNavigate() {
    navigate("/studentscreate")
  }

  function handleNavigateUpdate(id) {
    navigate(`/studentsupdate/${id}`)
  }

  function handleSearch() {
    setState((prevState) => !prevState)
  }

  function deleteStudents(id) {
    api.delete(`/students/${id}`).then(() => { 
      alert("Estudante deletado com sucesso!")
      setState((prevState) => !prevState)
    }).catch(error => { 
      if (error.response) { 
        alert(error.response.data.message) 
      } else { 
        alert("Não foi possível deletar o usuário!") 
      } 
    })
  }

  useEffect(() => {
    async function fetchTeachers() {
      const response = await api.get(`/students/?name=${search}`)
      setStudents(response.data.students)
    }

    fetchTeachers()
  }, [state])

  return (
    <ContainerOne>
      <ContainerTwo className={statePage ? "containerLight" : "containerDark"}>
        <Header />
        <div style={{ 
          display: "flex",
          position: "relative",
          alignItems: "center", 
          gap: "16px", 
          justifyContent: "center", 
          borderBottom: statePage ? "1px solid #00111A" : "1px solid #FFFAF1", 
          marginInline: "36px",
          paddingBottom: "16px"
        }}>
          <h1 style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>Aluno (a)</h1>
          <ButtonIcon onClick={handleNavigate}>
            <IoMdAddCircleOutline size={40} style={{ color: statePage ? "#00111A" : "#FFFAF1" }} />
          </ButtonIcon>
          <Link 
            style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px", position: "absolute", right: "20px",  color: statePage ? "#00111A" : "#FFFAF1" }} 
            to="/"
          >
            Página Home 
            <IoMdReturnLeft size={40} color={statePage ? "#00111A" : "#FFFAF1" } />
          </Link>
        </div>
        <Main className={statePage ? "light" : "dark"}>
          <InputContainer>
            <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
              Digite o nome
              <Input value={search} onChange={(e) => setSearch(e.target.value)} />
            </label>
            <Button onClick={handleSearch}>Pesquisar</Button>
          </InputContainer>
          <TableComponent>
            <thead className={statePage ? "tableLight" : "tableDark"}>
              <tr>
                <th class="name">Name</th>
                <th class="cpf">cpf</th>
                <th class="birth">Data de nascimento</th>
                <th class="action">Opções</th>
              </tr>
            </thead>
            <tbody className={statePage ? "tableLight" : "tableDark"}>
              {
                students.map((student) => (
                  <tr class="rows">
                    <td class="name-row">
                      {student.name}
                    </td>
                    <td class="cpf-row">{student.cpf}</td>
                    <td class="date-row">{formatDate(student.birth)}</td>
                    <td class="options-row">
                      <a class="change" onClick={() => handleNavigateUpdate(student.id)}>Alterar</a>
                      <a class="remove" onClick={() => deleteStudents(student.id)}>Excluir</a>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </TableComponent>
        </Main>
      </ContainerTwo>
    </ContainerOne >
  )
}


