import { Container } from './styles'
import { useStatePage } from '../../hooks/statePage'
import InputMask from 'react-input-mask';

export function Input({ placeholder = "", value = "", type = "text", ...rest }) {
  const { statePage } = useStatePage()

  return (
    <Container className={statePage ? "light" : "dark"}>
      <InputMask type={type} value={value} placeholder={placeholder} {...rest} />
    </Container>
  )
}