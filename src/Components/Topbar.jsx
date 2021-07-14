import React from 'react';
import {LogoStyle, TopbarStyledDiv} from "./styled"
 
const Topbar = ({greetingMessage}) => { 
  return (
    <TopbarStyledDiv>
        <LogoStyle/>
        <div>
        {greetingMessage}
        </div>
    </TopbarStyledDiv>
  );
};
 
export default Topbar;