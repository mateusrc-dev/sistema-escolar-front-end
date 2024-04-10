import { useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { FaUserCircle } from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";
import { ArrowComponent, AvatarComponent, Container, ItemModal, ModalComponent } from './styles'
import { useAuth } from '../../hooks/auth'
import { StatePage } from '../StatePage'
import { useStatePage } from '../../hooks/statePage'
import { useState } from 'react'

export function Header() {
  const { statePage } = useStatePage()
  const { user } = useAuth()
  const [ state, setState ] = useState(false)

  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  function handleNavigateDirection() {
    navigate(`/directiondetails/${user.id}`)
  }

  function handleState() {
    if (state === false) {
      setState(true)
    } else {
      setState(false)
    }
  }

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      handleState();
    }
  };

  return (
    <Container>
      <header className={statePage ? "borderDark" : "borderLight"} >
        <StatePage StatePage={statePage} className="statePage" />
        <p className={statePage ? "h3Light eduStation" : "h3Dark eduStation"}>Edu Station</p>
        <h3 className={statePage ? "h3Light" : "h3Dark"}>Direção Workstation</h3>
          <AvatarComponent onClick={handleState}>
            {statePage ? <FaUserCircle size={75} fill /> : <FaUserCircle size={75}  />}
          <ArrowComponent>
            {statePage ? <BsArrowReturnRight size={16} fill /> : <BsArrowReturnRight size={16}  />}
          </ArrowComponent>
        </AvatarComponent>
        
        <div 
          id="modal"
          className={state ? "modal" : "none"}
          onClick={handleOutsideClick}
        >
          {state && 
            <ModalComponent>
              <ItemModal className={statePage ? "LogoutLight" : "LogoutDark"} onClick={handleNavigateDirection}>
                Alterar <FaUserCircle />
              </ItemModal>
              <div className='line'></div>
              <ItemModal className={statePage ? "LogoutLight" : "LogoutDark"} onClick={handleSignOut}>
                Exit <FiLogOut />
              </ItemModal>
            </ModalComponent>
          }
        </div>
      </header>
    </Container>
  )
}