import styled from 'styled-components';


export const TopbarStyledDiv = styled.div`
    width: 100%;
    height: 60px;
    text-align: center;
    vertical-align: center;
    background-color: lightblue;
    font-size: 30px;
    font-family: 'Comic Sans MS';
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
`;

export const LogoStyle = styled.div`
    width: 50px;
    height: 50px;
    background-image: url('/images/pomelo-icon.png');
    background-size: cover;
    margin-left: 20px;
    grid-column: auto;
    grid-row: auto;
`;