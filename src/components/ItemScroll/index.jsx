import { ItemScroll as ItemScrollContainer } from './styles'

export function ItemScroll({ subjectName, checked, ...rest }) {
  return (
    <ItemScrollContainer>
      <div className='checkbox'>
        <input type="checkbox" {...rest} checked={checked} /> 
        <label></label>
      </div>
      {subjectName}
    </ItemScrollContainer>
  )
}