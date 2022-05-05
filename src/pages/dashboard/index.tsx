import React from 'react'
import Nav from '../../components/navBar'
import Heade from '../../components/heade'
import {AsideCardP,AsideCard, AsideContainer, Card, Continer, Index, MMain, FinanceDiv, Expenses, ContinerFinance, FooterCard} from './styled'
import {GiWallet, GiReceiveMoney, GiPiggyBank, GiTakeMyMoney} from 'react-icons/gi'
import {HiDotsVertical} from 'react-icons/hi'

interface Props{
passThema(): void;
}

const Dashboard: React.FC<Props> = ({passThema})=> {
  return (
    <Continer>
            <div className="heade">
              <Heade passThema={passThema} />
            </div>
            <div className="nav">
              <Nav />
            </div>
        <Index>
            <MMain>
              
              <Card>
                <div>
                <span className='Icon' ><GiWallet  size='1.9em' /></span>
                <HiDotsVertical  size='1.6em' />
               </div>
                <p className='Ptext'>Balanço</p>
                <h1 className='priceText'>$111215,60</h1>
               </Card>
             
              <Card> <div><span className='Icon' ><GiReceiveMoney  size='1.9em' /></span><HiDotsVertical size='1.6em' /></div>
                <p className='Ptext'>Renda</p>
                <h1 className='priceText'>$30,56</h1></Card>
             
              <Card> <div><span className='Icon' ><GiPiggyBank  size='1.9em' /></span><HiDotsVertical size='1.6em' /></div>
                <p className='Ptext'>Cofre</p>
                <h1 className='priceText'>$9119,80</h1></Card>
             
              <Card> <div><span className='Icon' ><GiTakeMyMoney  size='1.9em' /></span><HiDotsVertical size='1.6em' /></div>
                <p className='Ptext'>Despesas</p>
                <h1 className='priceText'>$787,25</h1></Card>
              
              <ContinerFinance>
                <FinanceDiv>
                </FinanceDiv>
                <Expenses>
                </Expenses>
              </ContinerFinance>
              
              <AsideContainer>
                <AsideCardP>
                
                </AsideCardP> 
                <AsideCard>

                </AsideCard>
              </AsideContainer>
            
            <FooterCard>
            </FooterCard>

            </MMain>
        </Index>
    </Continer>
  )
}
 export default Dashboard;