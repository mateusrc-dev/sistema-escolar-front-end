import { useAuth } from '../../hooks/auth'
import { useState } from "react"
import { Container, LinksContainer } from './styles'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useStatePage } from '../../hooks/statePage'
import { StatePage } from '../../components/StatePage'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()
  const { statePage } = useStatePage()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <main className={statePage ? "light" : "dark"}>
        <header className={statePage ? "borderDark" : "borderLight"} >
          <StatePage StatePage={statePage} className="statePage" />
          <p className={statePage ? "h3Light eduStation" : "h3Dark eduStation"}>Edu Station</p>
          <h3 className={statePage ? "h3Light" : "h3Dark"}>Direção Workstation</h3>
        </header>
        <div className={statePage ? "divLight" : "divDark"} >
          <h1 className={statePage ? "h1Light" : "h1Dark"}>Faça login</h1>
          <div className="input" >
            <label className={statePage ? "labelLight" : "labelDark"} htmlFor="email">Email</label>
            <input className={statePage ? "inputLight" : "inputDark"} type="text" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <label className={statePage ? "labelLight" : "labelDark"} htmlFor="password">Senha</label>
            <input className={statePage ? "inputLight" : "inputDark"} type="password" id="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)} />
          </div>
          <LinksContainer>
            <Link className={statePage ? "linkLight" : "linkDark"} to="/register">Primeira vez aqui?</Link>
            <Link className={statePage ? "linkLight" : "linkDark"} to="/sendemail">Esqueceu a senha?</Link>
          </LinksContainer>
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <Button onClick={handleSignIn}>Entrar</Button>
          </div>
        </div>
      </main>
    </Container >
  )
}