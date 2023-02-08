// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// import { NavItem } from './components/nav-item'
import { Navbar } from './components/navbar'
// import { Title } from './components/title'
import { Header } from './components/header'
//2- import { Avatar } from './components/avatar'
//2- import { Text } from './components/Text'
//2- import { Button } from './components/button'



// const items = [
//   'Página Inicial',
//   'Pesquisa',
//   'Explorar',
//   'Reels',
//   'Mensagens',
//   'Notificações',
//   'Criar',
//   'Perfil',
//   'Mais'
// ];

const App = () => {

  return (
    <>
    <Navbar />
      <Header />
      {/* <Navbar /> */}
      {/* <Text color='red' bold>Texto</Text> */}
      {/* <Navbar>
        <Title />
        {items.map((item) => (
          <NavItem key={item} text={item} />
        ))}
      </Navbar> */}      
      {/*-2 <Header> */}
        {/* <Avatar /> */}
        {/* <h1>Título</h1>         */}
        {/* <Text bold={true}>@adaTech</Text>
        <Button>Seguindo</Button>
        <Button>Enviar Mensagem</Button>
        <Text>211 publicações</Text>
        <Text>44,2 mil seguidores</Text>
        <Text>2 seguindo</Text> */}
      {/* </Header> -2*/}
    </>

  )
}

export default App
