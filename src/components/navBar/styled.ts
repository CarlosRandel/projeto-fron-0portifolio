import styled from 'styled-components';
export const Continer = styled.nav`
background: ${props => props.theme.colors.bar };
align-items: center;
justify-content: flex-end;
display:flex;
position: fixed;
flex-direction: column;
padding: 2rem;
height: 100vh;
width: 5%;
text-align: center;
/* border: 1px solid #fff; */
overflow: hidden;

`;

export const Buttons = styled.a`
    margin: 12px;
    color: ${props => props.theme.colors.navIcons};
    &:hover{
        color: ${props => props.theme.colors.iconscolor}
        
}
`;
export const List = styled.ul`
    /* border: 1px solid #fff; */
    background: ${props => props.theme.colors.bar};
    position: absolute;
    top: 1px;
    
`;
export const ListItem = styled.li`
    justify-content: center;
    align-items:flex-end;
    cursor: pointer;
    display: flex;
    position: relative;
    &.iconlogo{
        color: ${props => props.theme.colors.iconscolor};
        margin: 20px 0;
        cursor: auto;
    }
`;
export const ListB = styled.ul`
    /* border: 1px solid #fff; */
    background: ${props => props.theme.colors.bar};
    position: absolute;
    bottom: 1px;
`;