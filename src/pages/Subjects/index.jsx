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

export function Subjects() {
  const { statePage } = useStatePage()
  const [subjects, setSubjects] = useState([])
  const [search, setSearch] = useState("")
  const [state, setState] = useState(false)
  const navigate = useNavigate()

  function formatDate(dateString) {
    const dateObject = dayjs(dateString);

    const formattedDate = dateObject.format('DD/MM/YYYY');

    return formattedDate;
  };

  function handleNavigate() {
    navigate("/subjectcreate")
  }

  function handleNavigateUpdate(id) {
    navigate(`/subjectupdate/${id}`)
  }

  function handleSearch() {
    setState((prevState) => !prevState)
  }

  function deleteSubject(id) {
    api.delete(`/subjects/${id}`).then(() => { 
      alert("Disciplina deletada com sucesso!")
      setState((prevState) => !prevState)
    }).catch(error => { 
      if (error.response) { 
        alert(error.response.data.message) 
      } else { 
        alert("Não foi possível deletar a disciplina!") 
      } 
    })
  }

  useEffect(() => {
    async function fetchSubjects() {
      const response = await api.get(`/subjects/?name=${search}`)
      setSubjects(response.data.subjects)
    }

    fetchSubjects()
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
          <h1 style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>Disciplina</h1>
          <ButtonIcon onClick={handleNavigate}>
            <IoMdAddCircleOutline style={{ color: statePage ? "#00111A" : "#FFFAF1" }} size={40} />
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
                <th class="date-of-create">Data de criação</th>
                <th class="action">Opções</th>
              </tr>
            </thead>
            <tbody className={statePage ? "tableLight" : "tableDark"}>
              {
                subjects.map((subject) => (
                  <tr class="rows">
                    <td class="name-row">
                      {subject.name}
                    </td>
                    <td class="date-row">{formatDate(subject.created)}</td>
                    <td class="options-row">
                      <a class="change" onClick={() => handleNavigateUpdate(subject.id)}>Alterar</a>
                      <a class="remove" onClick={() => deleteSubject(subject.id)}>Excluir</a>
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


