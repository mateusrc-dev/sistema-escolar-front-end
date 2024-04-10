import { ContainerOne, ContainerTwo, Main } from './styles'
import { Header } from '../../components/Header'
import { useStatePage } from '../../hooks/statePage'
import { ItemSelect } from '../../components/ItemSelect'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const { statePage } = useStatePage()
  const navigate = useNavigate()

  function handleNavigationDirection() {
    navigate("/direction")
  }

  function handleNavigationTeachers() {
    navigate("/teachers")
  }

  function handleNavigationStudents() {
    navigate("/students")
  }

  function handleNavigationSubjects() {
    navigate("/subjects")
  }

  function handleNavigationClass() {
    navigate("/class")
  }

  return (
    <ContainerOne>
      <ContainerTwo className={statePage ? "containerLight" : "containerDark"}>
        <Header />
        <Main className={statePage ? "light" : "dark"}>
          <ItemSelect onClick={handleNavigationDirection}>Direção</ItemSelect>
          <ItemSelect onClick={handleNavigationTeachers}>Docente</ItemSelect>
          <ItemSelect onClick={handleNavigationStudents}>Aluno (a)</ItemSelect>
          <ItemSelect onClick={handleNavigationSubjects}>Disciplina</ItemSelect>
          <ItemSelect onClick={handleNavigationClass}>Turma</ItemSelect>
        </Main>
      </ContainerTwo>
    </ContainerOne >
  )
}


