import { ContainerOne, ContainerTwo, Form } from './styles'
import { Header } from '../../components/Header'
import { useStatePage } from '../../hooks/statePage'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { IoMdReturnLeft } from 'react-icons/io'

export function SubjectUpdate() {
  const { statePage } = useStatePage()
  const [name, setName] = useState("")
  const [date, setDate] = useState("")

  const params = useParams()

  function updateSubject(e) {
    e.preventDefault()
    if (!name || !date) {
      return alert("Preencha todos os campos")
    }

    api.put(`/subjects/${params.id}`, { 
      name, 
      created: date, 
    }).then(() => { 
      alert("Disciplina alterada com sucesso!") 
    }).catch(error => { 
      if (error.response) { 
        alert(error.response.data.message) 
      } else { 
        alert("Não foi possível alterar usuário!") 
      } 
    })
  }

  useEffect(() => {
    async function fetchSubject() {
      const response = await api.get(`/subjects/${params.id}`)
      setName(response.data.subject[0].name)
      setDate(response.data.subject[0].created)
    }

    fetchSubject()
  }, [])

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
            <Button type="submit" onClick={(e) => updateSubject(e)}>Alterar</Button>
          </div>
        </Form>
      </ContainerTwo>
    </ContainerOne >
  )
}


