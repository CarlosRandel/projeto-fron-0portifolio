import React from 'react'
import {BiTransfer} from 'react-icons/bi'
import {RiShieldFlashFill} from 'react-icons/ri'
import {IoSettingsSharp} from 'react-icons/io5'
import { BsFillCreditCardFill,BsFileEarmarkBarGraphFill, BsBoxArrowRight } from 'react-icons/bs'
import { MdDashboard, MdRequestPage} from 'react-icons/md'
import { Buttons, Continer, List, ListItem} from './styled'

export default function Nav() {
  return (
    <div>
        <Continer>
          <List>
            <ListItem className='iconlogo'><RiShieldFlashFill size='1.6em'/></ListItem>
            <ListItem><Buttons href='/'><MdDashboard size='1.6em'/></Buttons></ListItem>
            <ListItem><Buttons href='/'><BsFillCreditCardFill size='1.6em'/></Buttons></ListItem>
            <ListItem><Buttons href='/'><BiTransfer size='1.6em'/></Buttons></ListItem>
            <ListItem><Buttons href='/'><MdRequestPage size='1.6em'/></Buttons></ListItem>
            <ListItem><Buttons href='/'><BsFileEarmarkBarGraphFill size='1.6em'/></Buttons></ListItem>
          </List>
          <div className="itemB">
          <ul>
            <ListItem><Buttons><IoSettingsSharp size='1.6em'/></Buttons></ListItem>
            <ListItem><Buttons><BsBoxArrowRight size='1.6em'/></Buttons></ListItem>
          </ul>   
          </div>
           
        </Continer>
    </div>
  )
}
