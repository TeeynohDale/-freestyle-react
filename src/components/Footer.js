import React from 'react';
import {Container} from './styled/Container.styled';
import {Flex} from './styled/Flex.styled';
import {StyledFooter} from './styled/Footer.styled' ;

function Footer() {
    return (
        <StyledFooter>
              <Container>
                   <img src="./images/logo_white.svg" alt=" "/>
                    <Flex >
                         <ul>
                            <li>
                                 Mbare is home to large number of artists in Zimbabwe,
                                  from oil painters to material recycle artists.
                                  The main concern is getting exposure for 
                                  those artist, that's where the urban culture 
                                  and heritage initiative to come and help.
                            </li>
                            <li>+1-543-123-4567</li>
                            <li>example@huddle.com</li>
                         </ul>
                         <ul>
                             <li>About Us</li>
                             <li>What WE Do</li>
                             <li>FAQ</li>
                         </ul>
                         <ul>
                             <li>Career</li>
                             <li>Blog</li>
                             <li>Contact Us</li> 
                         </ul>
                     </Flex>
                     <p>&copy;2021 Huddle</p>
                </Container>  
        </StyledFooter>
    )
    
}

export default Footer;
