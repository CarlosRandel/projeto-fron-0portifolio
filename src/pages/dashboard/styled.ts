import styled from "styled-components";

export const Continer = styled.aside`
    display: grid;
    height: 100vh;
    background: ${props => props.theme.colors.primary};
    grid-template-columns: 5% 93%;
    grid-template-rows: 10vh 30vh 1fr;
    > .heade{
        grid-column-start: 2;
        grid-column-end: 3;
    }
    > .nav{
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
    }

`;

export const Index = styled.main`

/* border: 1px solid #fff; */
    grid-row-start: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    height: 88vh;
`;

export const MMain = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
    grid-template-rows: 20vh 30vh;
    grid-gap: 15px;
    /* border: 1px solid #fff; */
    width: 93%;
    height: 88vh;
    padding-left: 10px;
`;
export const Card = styled.div`
    width: 1fr;
    height: 20vh;
    border-radius: 5px;
    color: ${props => props.theme.colors.text};
    padding:15px 0 0 15px;
    background: ${props => props.theme.colors.secundary};
    
    span{
        color: ${props => props.theme.colors.navIcons};
        background: ${props => props.theme.colors.spamcolor};
        display: flex;
        width:2.35rem;
        padding:0.3rem;
        height:2.35rem;
        border-radius:2rem;
    }
    > .Ptext{
        margin: 10px 0; 
    }
    
   div{
       display: flex;
       justify-content: space-between;
       padding-right:10px ;
   }

`;
export const AsideContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 2fr;
    height: 85vh;
    /* border: 1px solid #fff; */
`;
export const AsideCardP = styled.div`
    width: 100%;
    height: 50vh;
    background: ${props => props.theme.colors.secundary};
    margin-bottom: 15px;
    border-radius: 5px;
    /* border: 1px solid #fff; */
`;
export const AsideCard = styled.div`
    width: 100%;
    height: 30vh;
    background: ${props => props.theme.colors.secundary};
    border-radius: 5px;
    /* border: 1px solid #fff; */

`;

export const ContinerFinance = styled.div`
    display: flex;
    flex-direction: row;
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
    
    `;

export const FinanceDiv = styled.div`
    width: 60%;
    /* max-width: 40%; */
    margin-right: 15px;
    height: 30vh;
    background: ${props => props.theme.colors.secundary};
    border-radius: 5px;
`;
export const Expenses = styled.div`
    width: 39%;
    /* max-width: ; */
    height: 30vh;
    background: ${props => props.theme.colors.secundary};
    border-radius: 5px;

`;

export const FooterCard = styled.footer`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    background: ${props => props.theme.colors.secundary};
    border-radius: 5px;

`;