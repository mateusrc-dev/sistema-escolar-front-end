import { ContainerOne, ContainerTwo, Form } from './styles'
import { Header } from '../../components/Header'
import { useStatePage } from '../../hooks/statePage'
import { Input } from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useEffect, useState } from 'react'
import cryptoRandomString from 'crypto-random-string';
import { api } from '../../services/api'
import { IoMdReturnLeft } from 'react-icons/io'

export function StudentsCreate() {
  const { statePage } = useStatePage()
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [date, setDate] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function createNewStudent(e) {
    e.preventDefault()
    if (!name || !email || !cpf || !date) {
      return alert("Preencha todos os campos")
    }

    api.post("/students", { 
      name, 
      email, 
      cpf, 
      birth: date, 
      password 
    }).then(() => { 
      alert("Aluno cadastrado com sucesso!"); 
      navigate("/students") 
    }).catch(error => { 
      if (error.response) { 
        alert(error.response.data.message) 
      } else { 
        alert("Não foi possível cadastrar!") 
      } 
    })
  }

  function generateRandomPassword() {
    const randomPassword = cryptoRandomString({ length: 12 })

    setPassword(randomPassword)
  };

  useEffect(() => {
    function generateRandomPassword() {
      const randomPassword = cryptoRandomString({ length: 12 })
  
      setPassword(randomPassword)
    };

    generateRandomPassword()
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
          <h1 style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>Aluno (a)</h1>
          <Link 
            style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px", position: "absolute", right: "20px",  color: statePage ? "#00111A" : "#FFFAF1" }} 
            to="/"
          >
            Página Home 
            <IoMdReturnLeft size={40} color={statePage ? "#00111A" : "#FFFAF1" } />
          </Link>
        </div>
        <Form className={statePage ? "light" : "dark"}>
          <h3 style={{ color: statePage ? "#00111A" : "#FFFAF1" }} className={statePage ? "light" : "dark"}>Cadastro Aluno (a)</h3>
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
          <div style={{ display: "flex", alignItems: "center", justifyContent: "start", gap: "42px" }}>
            <p style={{ color: statePage ? "#00111A" : "#FFFAF1" }}>
              Senha temporária
            </p>
            <a style={{ color: "#065E7C", textDecoration: "underline" }} onClick={generateRandomPassword}>gerar senha</a>
          </div>
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <p style={{ color: "#AB4D55", fontSize: "20px" }}>{password}</p>
          </div>
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <Button type="submit" onClick={(e) => createNewStudent(e)}>Criar Usuário</Button>
          </div>
        </Form>
      </ContainerTwo>
    </ContainerOne >
  )
}


