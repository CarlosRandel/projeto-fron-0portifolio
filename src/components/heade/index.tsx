import React, { useContext } from 'react'
import Switch from 'react-switch'
import {ThemeContext} from 'styled-components'
import {Container, InputBox, ListIcons} from './styled'
import {FaRegCommentDots, FaUserAlt} from 'react-icons/fa'
import {IoMdNotificationsOutline, IoIosSearch} from 'react-icons/io'
interface Props{
  passThema(): void;

}

 const Heade:React.FC<Props> = ({passThema})=> {
  const {colors, title} = useContext(ThemeContext);
  
  return (
    <div>
        <Container>
            <h2>Dashboard</h2>
            <InputBox>
              <IoIosSearch size='1.3em' />
              <input placeholder='Pesquisar qualquer coisa' />
            </InputBox>
            
            <ListIcons>
              <li><Switch
                  onChange={passThema}
                  checked={title === 'dark'}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={5}
                  width={30}
                  offHandleColor={colors.navIcons}
                  onColor={colors.iconscolor}
                  handleDiameter={15}/></li>
              <li><FaRegCommentDots size='1.6em' /></li>
              <li><IoMdNotificationsOutline size='1.6em'/></li>
              <li><FaUserAlt size='1.6em' /></li>
            </ListIcons>
        </Container>
    </div>
  )
}
export default Heade;