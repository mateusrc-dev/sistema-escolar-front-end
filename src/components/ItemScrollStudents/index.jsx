import { ItemScroll as ItemScrollContainer } from './styles'

export function ItemScrollStudents({ studentName, cpf, birth, checked, ...rest }) {
  return (
    <ItemScrollContainer>
      <div className='checkbox'>
        <input type="checkbox" {...rest} checked={checked} /> 
        <label></label>
      </div>
      {studentName} / cpf: {cpf} / Data de nascimento: {birth}
    </ItemScrollContainer>
  )
}