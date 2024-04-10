import { ContainerOne, ContainerTwo, Form } from './styles'
import { Header } from '../../components/Header'
import { useStatePage } from '../../hooks/statePage'
import { Input } from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { api } from '../../services/api'
import { IoMdReturnLeft } from 'react-icons/io'

export function DirectionCreate() {
  const { statePage } = useStatePage()
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [date, setDate] = useState("")
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate()

  function createNewDirector(e) {
    e.preventDefault()
    if (!name || !email || !cpf || !date) {
      return alert("Preencha todos os campos")
    }
    if (newPassword.length < 6) {
      return alert("A senha tem que ter pelo menos 6 caracteres")
    }
    if (newPassword !== confirmPassword) {
      return alert("Confirme se sua senha está correta!")
    }
    api.post("/users", { 
      name, 
      email, 
      cpf, 
      birth: date, 
      password: newPassword 
    })
      .then(() => { alert("Usuário cadastrado com sucesso!"); navigate("/direction") })
      .catch(error => { 
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
          <h1 style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>Direção</h1>
          <Link 
            style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px", position: "absolute", right: "20px",  color: statePage ? "#00111A" : "#FFFAF1" }} 
            to="/"
          >
            Página Home 
            <IoMdReturnLeft size={40} color={statePage ? "#00111A" : "#FFFAF1" } />
          </Link>
        </div>
        <Form className={statePage ? "light" : "dark"}>
          <h3 style={{ color: statePage ? "#00111A" : "#FFFAF1" }} className={statePage ? "light" : "dark"}>Cadastro Direção</h3>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            Nome
            <Input placeholder="Ex. Mateus" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            cpf
            <Input placeholder="Ex. 055.989.333.73" mask="999.999.999-99" value={cpf} onChange={e => setCpf(e.target.value)} />
          </label>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            data de nascimento
            <Input type='date' value={date} onChange={e => setDate(e.target.value)} />
          </label>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            email
            <Input type='email' value={email} placeholder='Ex. mateus@email.com' onChange={e => setEmail(e.target.value)} />
          </label>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            Senha
            <Input type='password' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          </label>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            Confirmar Senha
            <Input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          </label>
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <Button onClick={(e) => createNewDirector(e)}>Criar usuário</Button>
          </div>
        </Form>
      </ContainerTwo>
    </ContainerOne >
  )
}


