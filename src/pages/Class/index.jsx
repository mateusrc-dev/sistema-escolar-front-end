import { ButtonIcon, ContainerOne, ContainerScroll, ContainerScrollStudents, ContainerTwo, InputContainer, Main, ModalComponent, ModalComponentStudents, TableComponent, TableComponentModal } from './styles'
import { Header } from '../../components/Header'
import { useStatePage } from '../../hooks/statePage'
import { Input } from '../../components/Input'
import { useNavigate, Link } from 'react-router-dom'
import { IoMdAddCircleOutline, IoMdReturnLeft } from "react-icons/io";
import { Button } from '../../components/Button'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs';

export function Class() {
  const { statePage } = useStatePage()
  const [classState, setClassState] = useState([])
  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])
  const [search, setSearch] = useState("")
  const [stateSearch, setStateSearch] = useState("")
  const [state, setState] = useState(false)
  const [state2, setState2] = useState(false)
  const navigate = useNavigate()

  console.log(students)

  function formatDate(dateString) {
    const dateObject = dayjs(dateString);

    const formattedDate = dateObject.format('DD/MM/YYYY');

    return formattedDate;
  };

  function handleNavigate() {
    navigate("/classcreate")
  }

  function handleNavigateClassUpdate(id) {
    navigate(`/classupdate/${id}`)
  }
  
  function handleState(e) {
    e.preventDefault()
    if (state === false) {
      setState(true)
    } else {
      setState(false)
    }
  }

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      handleState(e);
    }
  };

  function handleState2(e) {
    e.preventDefault()
    if (state2 === false) {
      setState2(true)
    } else {
      setState2(false)
    }
  }

  const handleOutsideClick2 = (e) => {
    if (e.target.id === "modal") {
      handleState2(e);
    }
  };

  function handleSearch() {
    setStateSearch((prevState) => !prevState)
  }

  async function handleFetchTeachers(e, id) {
    handleState(e)

    const response = await api.get(`/classAndTeachers/${id}`)
    setTeachers(response.data.relationsReturn)
  }

  async function handleFetchStudents(e, id) {
    handleState2(e)

    const response = await api.get(`/studentsAndClass/${id}`)
    setStudents(response.data.relationsReturn)
  }

  function deleteClass(id) {
    try {
      api.delete(`/class/${id}`)

      api.delete(`/studentsAndClass/${id}`)

      api.delete(`/classAndTeachers/${id}`)

      setStateSearch((prevState) => !prevState)

    } catch(error) { 
      if (error.response) { 
        alert(error.response.data.message) 
      } else { 
        alert("Não foi possível deletar a turma!") 
      } 
    }
  }

  useEffect(() => {
    async function fetchClass() {
      const response = await api.get(`/class/?name=${search}`)
      setClassState(response.data.classItems)
    }

    fetchClass()
  }, [stateSearch])

  return (
    <ContainerOne>
      <ContainerTwo className={statePage ? "containerLight" : "containerDark"}>
        <Header />
        <div 
          id="modal"
          className={state ? "modal" : "none"}
          onClick={handleOutsideClick}
        >
          {state && 
            <ModalComponent>
              <h3>Docentes</h3>
              <div className='line'></div>
              <h3>{teachers[0]?.class_name} - {teachers[0]?.class_year}</h3>
              <ContainerScroll>
                {
                  teachers.map((teacher) => (
                    <p>{teacher.teacher_name} / {teacher.subject_name}</p>
                  ))
                }
              </ContainerScroll>
              <Button onClick={(e) => handleState(e)}>Sair</Button>
            </ModalComponent>
          }
        </div>
        <div 
          id="modal"
          className={state2 ? "modal" : "none"}
          onClick={handleOutsideClick2}
        >
          {state2 && 
            <ModalComponentStudents>
              <h3>Alunos matriculados</h3>
              <div className='line'></div>
              <h3>{students[0]?.class_name} - {students[0]?.class_year}</h3>
              <ContainerScrollStudents>
                <TableComponentModal>
                  <thead className={statePage ? "tableLight" : "tableDark"}>
                    <tr>
                      <th class="name">Name</th>
                      <th class="birth">data de nascimento</th>
                      <th class="cpf">CPF</th>
                      <th class="action">Opções</th>
                    </tr>
                  </thead>
                  <tbody className={statePage ? "tableLight" : "tableDark"}>
                    {
                      students.map((student) => (
                        <tr class="rows">
                          <td class="name-row">{student.student_name}</td>
                          <td class="birth-row">{formatDate(student.student_birth)}</td>
                          <td class="cpf-row">{student.student_cpf}</td>
                          <td class="options-row">
                            <Link class="show-report-card" target="_blank" to={`/reportcard/${student.student_id}/${student.class_id}`}>Emitir boletim</Link>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </TableComponentModal>
              </ContainerScrollStudents>
              <Button onClick={(e) => handleState2(e)}>Sair</Button>
            </ModalComponentStudents>
          }
        </div>
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
          <h1 style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>Turma</h1>
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
                <th class="name">Nome da turma</th>
                <th class="year">Ano</th>
                <th class="create">Data de criação</th>
                <th class="action">Opções</th>
              </tr>
            </thead>
            <tbody className={statePage ? "tableLight" : "tableDark"}>
              {
                classState.map((classItem) => (
                  <tr class="rows">
                    <td class="name-row">
                      {classItem.name}
                    </td>
                    <td class="year-row">{classItem.year}</td>
                    <td class="create-row">{formatDate(classItem.created)}</td>
                    <td class="options-row">
                      <a class="show-teachers" onClick={(e) => handleFetchTeachers(e, classItem.id)}>Ver docentes</a>
                      <a class="show-students" onClick={(e) => handleFetchStudents(e, classItem.id)}>Ver alunos</a>
                      <a class="change" onClick={() => handleNavigateClassUpdate(classItem.id)}>Alterar</a>
                      <a class="remove" onClick={() => deleteClass(classItem.id)}>Excluir</a>
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


