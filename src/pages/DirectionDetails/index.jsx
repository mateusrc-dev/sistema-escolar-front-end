import { ContainerOne, ContainerTwo, Form } from './styles'
import { Header } from '../../components/Header'
import { useStatePage } from '../../hooks/statePage'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { IoMdReturnLeft } from 'react-icons/io'

export function DirectionDetails() {
  const { statePage } = useStatePage()
  const [passwordState, setPasswordState] = useState(false)
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [date, setDate] = useState("")
  const [email, setEmail] = useState("")
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const params = useParams()

  function handlePasswordState() {
    setPasswordState(prevState => !prevState)
  }

  function updateDirector(e) {
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
    api.put(`/users/${params.id}`, { 
      name, 
      email, 
      cpf, 
      birth: date, 
      password: newPassword,
      old_password: oldPassword
    }).then(() => { 
      alert("Usuário alterado com sucesso!") 
    }).catch(error => { 
      if (error.response) { 
        alert(error.response.data.message) 
      } else { 
        alert("Não foi possível alterar usuário!") 
      } 
    })
  }

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get(`/users/${params.id}`)
      setName(response.data.user[0].name)
      setEmail(response.data.user[0].email)
      setCpf(response.data.user[0].cpf)
      setDate(response.data.user[0].birth)
    }

    fetchUser()
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
          padding: "16px"
        }}>
          <Link 
            style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px", position: "absolute", right: "20px",  color: statePage ? "#00111A" : "#FFFAF1" }} 
            to="/"
          >
            Página Home 
            <IoMdReturnLeft size={40} color={statePage ? "#00111A" : "#FFFAF1" } />
          </Link>
        </div>
        <Form className={statePage ? "light" : "dark"}>
          <h3 style={{ color: statePage ? "#00111A" : "#FFFAF1" }} className={statePage ? "light" : "dark"}>Alterar direção</h3>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            Nome
            <Input placeholder="Mateus" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            cpf
            <Input placeholder="055.989.333.73" mask="999.999.999-99" value={cpf} onChange={e => setCpf(e.target.value)} />
          </label>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            data de nascimento
            <Input type='date' value={date} onChange={e => setDate(e.target.value)} />
          </label>
          <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
            email
            <Input type='email' value={email} placeholder='mateus@email.com' onChange={e => setEmail(e.target.value)} />
          </label>
          {!passwordState && ( <Button onClick={handlePasswordState}>Alterar Senha</Button> )}
          {
            passwordState && (
              <>
                <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
                  Senha antiga
                  <Input type='password' value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
                </label>
                <div style={{ display: "flex", width: "100%", alignItems: "center", gap: "36px" }}>
                  <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
                    Nova senha
                    <Input type='password' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                  </label>
                  <label style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
                    Confirmar senha
                    <Input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                  </label>
                </div>
              </>
            )
          }
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <Button type="submit" onClick={updateDirector}>Alterar</Button>
          </div>
        </Form>
      </ContainerTwo>
    </ContainerOne >
  )
}


