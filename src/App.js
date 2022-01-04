import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import {Container} from './components/styled/Container.styled'
import GlobalStyle from './components/styled/Global';
import content from './content';
import Card from './components/Card';
import Footer from './components/Footer';




function App() {

  const theme ={
    colors: {
      header: '#ebfbff',
      body:'#fff',
      footer:'#003333',
    },
    mobile:'768px',
  }


  return (

    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle/>
        <Header/>
        <Container>
          {content.map((item,index)=>(
            <Card key={index} item={item}/>
          ))}
        </Container>
        <Footer/>

      </>
    </ThemeProvider>


  );
}

export default App;
 