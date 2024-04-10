import { ContainerOne, ContainerTwo, Form } from './styles'
import { Header } from '../../components/Header'
import { useStatePage } from '../../hooks/statePage'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { api } from '../../services/api'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdReturnLeft } from 'react-icons/io'

export function SubjectCreate() {
  const { statePage } = useStatePage()
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const navigate = useNavigate()

  function createNewSubject(e) {
    e.preventDefault()
    if (!name || !date) {
      return alert("Preencha todos os campos")
    }

    api.post("/subjects", { 
      name, 
      created: date, 
    }).then(() => { 
      alert("Disciplina cadastrada com sucesso!"); 
      navigate("/subjects") 
    }).catch(error => { 
      if (error.response) { 
        alert(error.response.data.message) 
      } else { 
        alert("Não foi possível cadastrar!") 
      } 
    })
  }

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
            Digite a disciplina
            <Input placeholder="Matemática" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            Data de criação
            <Input type='date' value={date} onChange={e => setDate(e.target.value)} />
          </label>
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <Button type="submit" onClick={(e) => createNewSubject(e)}>Criar</Button>
          </div>
        </Form>
      </ContainerTwo>
    </ContainerOne >
  )
}


