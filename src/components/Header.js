import React from 'react'
import { Link} from 'react-scroll'
import { Container } from './styled/Container.styled'
import { StyledHeader,Nav,Logo,Image} from './styled/Header.styled'
import { Button } from './styled/Button.styled';
import { Flex } from './styled/Flex.styled';

export default function Header() {
    return (
        <StyledHeader bg='#ebfbff'>
            <Container>
                <Nav>
                    <Link to="/">
                        <Logo src="./images/logo.svg" alt=''/>
                    </Link>
                    <Link to="">
                        <Button>Try It Free</Button>
                    </Link> 
                </Nav>
                <Flex>
                    <div className= "dale">
                        <h1>
                            Build The community your fans will love
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            A cumque blanditiis, velit sit ipsum repudiandae eveniet 
                            voluptates, vel assumenda fugiat atque fugit suscipit 
                            eligendi,architecto voluptatem.
                        </p>
                        <Button bg="#ff0099" color="#fff">
                            Get Started For Free
                        </Button>
                    </div>
                    <Image src="./images/illustration-mockups.svg" alt=""/>
                </Flex>
            </Container>
        </StyledHeader>
    )
}
//26;53mins