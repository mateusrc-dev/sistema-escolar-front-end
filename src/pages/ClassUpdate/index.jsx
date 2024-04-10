import { ContainerButtons, ContainerOne, ContainerScroll, ContainerScrollStudents, ContainerSelect, ContainerTwo, Form, ModalComponent, ModalComponentStudents } from './styles'
import { Header } from '../../components/Header'
import { useStatePage } from '../../hooks/statePage'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ItemScroll } from '../../components/ItemScroll'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { ItemScrollStudents } from '../../components/ItemScrollStudents'
import dayjs from 'dayjs';
import { IoMdReturnLeft } from 'react-icons/io'

export function ClassUpdate() {
  const { statePage } = useStatePage()
  const [name, setName] = useState("")
  const [year, setYear] = useState("")
  const [date, setDate] = useState("")
  const [teachers, setTeachers] = useState([])
  const [subjects, setSubjects] = useState([])
  const [students, setStudents] = useState([])
  const [subjectsAndTeacherSelected, setSubjectsAndTeacherSelected] = useState([])
  const [teacherSelected, setTeacherSelected] = useState(0)
  const [studentsSelected, setStudentsSelected] = useState([])
  const [state, setState] = useState(false)
  const [state2, setState2] = useState(false)

  const params = useParams()

  function formatDate(dateString) {
    const dateObject = dayjs(dateString);

    const formattedDate = dateObject.format('DD/MM/YYYY');

    return formattedDate;
  };

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

  async function updateClass(e) {
    e.preventDefault()
    if (!name || !year || !date || subjectsAndTeacherSelected.length === 0 || teacherSelected === 0 || studentsSelected.length === 0) {
      return alert("Preencha todos os campos")
    }

    try {
      await api.put(`/class/${params.id}`, { 
        name, 
        year, 
        created: date,  
      })

      await api.delete(`/studentsAndClass/${params.id}`)
      await api.delete(`/classAndTeachers/${params.id}`)

      for (let i = 0; i < subjectsAndTeacherSelected.length; i++) {
        await api.post("/classAndTeachers", { 
          teacher_id: subjectsAndTeacherSelected[i].teacher_id, 
          class_id: params.id, 
          subject_id: subjectsAndTeacherSelected[i].subject_id
        })
      }

      for (let i = 0; i < studentsSelected.length; i++) {
        await api.post("/studentsAndClass", { 
          student_id: studentsSelected[i],
          class_id: params.id,
        })
      }

      alert("Classe alterada com sucesso!") 
    } catch(error) { 
      if (error.response) { 
        alert(error.response.data.message) 
      } else { 
        alert("Não foi possível alterar a classe!") 
      } 
    }
  }

  function handleSubjectSelected(id) {
    const subjectAlreadySelectedIndex = subjectsAndTeacherSelected.findIndex(subjectSelected => (
      subjectSelected.subject_id === id && subjectSelected.teacher_id === teacherSelected
    ))
    if (subjectAlreadySelectedIndex !== -1) {
      const subjectsWithoutSubjectSelected = subjectsAndTeacherSelected.filter((_, index) => index !== subjectAlreadySelectedIndex)
      setSubjectsAndTeacherSelected(subjectsWithoutSubjectSelected)
    } else {
      setSubjectsAndTeacherSelected(prevState => [...prevState, { subject_id: id, teacher_id: teacherSelected }])
    }
  }

  function handleSubjectChecked(idCurrent, teacherCurrent) {
    const subjectIsSelected = subjectsAndTeacherSelected.find(subjectSelected => (subjectSelected.subject_id === idCurrent && subjectSelected.teacher_id === teacherCurrent))

    if (subjectIsSelected) {
      return true
    } else {
      return false
    }
  }

  function handleStudentSelected(id) {
    const studentAlreadySelected = studentsSelected.find(studentSelected => studentSelected === id)

    if (studentAlreadySelected) {
      const studentsWithoutStudentSelected = studentsSelected.filter(studentSelected => studentSelected !== id)
      setStudentsSelected(studentsWithoutStudentSelected)
    } else {
      setStudentsSelected(prevState => [...prevState, id])
    }
  }

  function handleStudentChecked(idCurrent) {
    const studentIsSelected = studentsSelected.find(studentSelected => studentSelected === idCurrent)

    if (studentIsSelected) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    async function fetchClass() {
      const response = await api.get(`/class/${params.id}`)
      setName(response.data.classItem[0].name)
      setYear(response.data.classItem[0].year)
      setDate(response.data.classItem[0].created)
    }

    async function fetchClassAndTeachers() {
      const response = await api.get(`/classAndTeachers/${params.id}`)
      let arrayElements = []
      for (let i = 0; i < response.data.relationsReturn.length; i++) {
        arrayElements.push({
          subject_id: response.data.relationsReturn[i].subject_id, 
          teacher_id: response.data.relationsReturn[i].teacher_id 
        })
      }
      setSubjectsAndTeacherSelected(arrayElements)
    }

    async function fetchClassAndStudents() {
      const response = await api.get(`/studentsAndClass/${params.id}`)
      let students = []
      for (let i = 0; i < response.data.relationsReturn.length; i++) {
        students.push(response.data.relationsReturn[i].student_id)
      }
      setStudentsSelected(students)
    }

    fetchClassAndStudents()
    fetchClassAndTeachers()
    fetchClass()
  }, [])

  useEffect(() => {
    async function fetchTeachers() {
      const response = await api.get(`/teachers/?name=`)
      setTeachers(response.data.teachers)
      setTeacherSelected(Number(response.data.teachers[0].id))
    }

    async function fetchSubjects() {
      const response = await api.get(`/subjects/?name=`)
      setSubjects(response.data.subjects)
    }

    async function fetchStudents() {
      const response = await api.get(`/students/?name=`)
      setStudents(response.data.students)
    }

    fetchTeachers()
    fetchSubjects()
    fetchStudents()
  }, [state])

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
              <h3>Vincular Docentes</h3>
              <div className='line'></div>
              <h3>Docente</h3>
              <ContainerSelect id="teachers-select" value={teacherSelected} onChange={(e) => setTeacherSelected(Number(e.target.value))}>
                {
                  teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                  ))
                }
              </ContainerSelect>
              <ContainerScroll>
                {
                  subjects.map((subject) => (
                    <ItemScroll key={subject.id} onChange={() => handleSubjectSelected(subject.id)} subjectName={subject.name} checked={handleSubjectChecked(subject.id, teacherSelected)} />
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
              <h3>Vincular Aluno (a)</h3>
              <div className='line'></div>
              <ContainerScrollStudents>
                {
                  students.map((student) => (
                    <ItemScrollStudents 
                      key={student.id}
                      onChange={() => handleStudentSelected(student.id)} 
                      checked={handleStudentChecked(student.id)}
                      studentName={student.name} 
                      cpf={student.cpf} 
                      birth={formatDate(student.birth)} 
                    />
                  ))
                }
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
          <Link 
            style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px", position: "absolute", right: "20px",  color: statePage ? "#00111A" : "#FFFAF1" }} 
            to="/"
          >
            Página Home 
            <IoMdReturnLeft size={40} color={statePage ? "#00111A" : "#FFFAF1" } />
          </Link>
        </div>
        <Form>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            Digite o nome da turma
            <Input placeholder="Ex. Turma A" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            Digite o ano
            <Input placeholder="Ex. 1° Ano" value={year} onChange={e => setYear(e.target.value)} />
          </label>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            Data de criação
            <Input type='date' value={date} onChange={e => setDate(e.target.value)} />
          </label>
          <ContainerButtons>
            <Button onClick={(e) => handleState(e)}>Vincular Docentes</Button>
            <Button onClick={(e) => handleState2(e)}>Vincular Alunos</Button>
          </ContainerButtons>
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <Button type="submit" onClick={(e) => updateClass(e)}>Alterar</Button>
          </div>
        </Form>
      </ContainerTwo>
    </ContainerOne >
  )
}


