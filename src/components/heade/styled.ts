import styled from 'styled-components';

export const Container = styled.div`
display: flex;
background: ${props => props.theme.colors.primary};
justify-content: space-between;
position: fixed;
width: 95%;
right: 0px;
padding: 10px;
color:${props => props.theme.colors.text} ;

`;

export const InputBox = styled.div`
    display: flex;
    width: 20%;
    padding: 8px;
    align-items: center ;
    background: ${props => props.theme.colors.secundary};
    border-radius: 5px;
    >input{
        display: flex;
        width: 100%;
        height: 100%;
        margin-left: 8px;
        border:0 ;
        color: ${props => props.theme.colors.text};
        outline: none;
        background: ${props => props.theme.colors.secundary};

        &::placeholder{
            color:${props => props.theme.colors.text};
            font-family: sans-serif;
            font-size: small;
        }
    }
`;

export const ListIcons = styled.ul`
    display: flex;
    align-items: center;
   >li{
        margin: 0  15px;
        padding-right: 10px;
    } 
    
`;
