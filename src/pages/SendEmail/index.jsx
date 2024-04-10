import { useState } from "react"
import { Container } from './styles'
import { Button } from '../../components/Button'
import { useStatePage } from '../../hooks/statePage'
import { StatePage } from '../../components/StatePage'

export function SendEmail() {
  const [email, setEmail] = useState("")
  const { statePage } = useStatePage()

  return (
    <Container >
      <main className={statePage ? "light" : "dark"}>
        <header className={statePage ? "borderDark" : "borderLight"} >
          <StatePage StatePage={statePage} className="statePage" />
          <h3 className={statePage ? "h3Light" : "h3Dark"}>Edu Station</h3>
        </header>
        <div className={statePage ? "divLight" : "divDark"}>
          <div className="input">
            <label className={statePage ? "labelLight" : "labelDark"} htmlFor="email">Digite seu email</label>
            <input className={statePage ? "inputLight" : "inputDark"} value={email} type="email" id="email" onChange={e => setEmail(e.target.value)} />
          </div>
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <Button>Enviar</Button>
          </div>
        </div>
      </main>
    </Container >
  )
}