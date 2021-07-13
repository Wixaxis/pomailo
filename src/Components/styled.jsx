import styled from 'styled-components';


export const TopbarStyledDiv = styled.div`
    width: 100%;
    height: 50px;
    text-align: center;
    vertical-align: center;
    background-color: lightblue;
    font-size: 30px;
    font-family: 'Comic Sans MS';
    padding: 0 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
`;

export const LogoStyle = styled.image`
    width: 30px;
    height: 30px;
    background-image: url('../library/images/pomelo-icon.png');
    grid-column: auto;
    grid-row: auto;
`;