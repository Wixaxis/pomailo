import React from 'react';
import {LogoStyle, TopbarStyledDiv} from "./styled"
 
const Topbar = ({greetingMessage}) => { 
  return (
    <TopbarStyledDiv>
        <LogoStyle>
            <img src="../library/images/pomelo-icon.png" alt="there's nothing here" />
        </LogoStyle>
        <div>
        {greetingMessage}
        </div>
    </TopbarStyledDiv>
  );
};
 
export default Topbar;