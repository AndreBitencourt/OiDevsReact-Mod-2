//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BsContainer from 'react-bootstrap/Container';
import BsRow from 'react-bootstrap/Row';
import BsCol from 'react-bootstrap/Col';
import BsButton from 'react-bootstrap/Button';
import BsCard from 'react-bootstrap/Card';
import BsAlert from 'react-bootstrap/Alert';
import BsNav from 'react-bootstrap/Nav';
import MButton from '@mui/material/Button';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BsContainer fluid>
        <div>
          <MButton variant="contained">Hello World</MButton>
        </div>
        <BsRow>
          <BsCol md={3} variant="bg-dark">
            <BsNav defaultActiveKey="/home" className="flex-column">
              <BsNav.Link href="/home">Active</BsNav.Link>
              <BsNav.Link eventKey="link-1">Link</BsNav.Link>
              <BsNav.Link eventKey="link-2">Link</BsNav.Link>
              <BsNav.Link eventKey="disabled" disabled>
                Disabled
              </BsNav.Link>
            </BsNav>
          </BsCol>
          <BsCol md={9}>
            <BsRow>
              <BsCol>Col 11</BsCol>
              <BsCol>Col 12</BsCol>
            </BsRow>
          </BsCol>
        </BsRow>

      </BsContainer>

      <BsAlert variant="success">
        <BsAlert.Heading>Hey, nice to see you</BsAlert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </BsAlert>
      <div className="App">
        <BsButton variant="primary">Primary</BsButton>{' '}
        <BsButton variant="secondary">Secondary</BsButton>{' '}
        <BsButton variant="success">Success</BsButton>{' '}
        <BsButton variant="warning">Warning</BsButton>{' '}
        <BsButton variant="danger">Danger</BsButton>{' '}
        <BsButton variant="info">Info</BsButton>{' '}
        <BsButton variant="light">Light</BsButton>{' '}
        <BsButton variant="dark">Dark</BsButton>
        <BsButton variant="link">Link</BsButton>
      </div>

      <BsCard style={{ width: '18rem' }}>
        <BsCard.Img variant="top" src="holder.js/100px180" />
        <BsCard.Body>
          <BsCard.Title>BsCard Title</BsCard.Title>
          <BsCard.Text>
            BsCard content.
          </BsCard.Text>
          <BsButton variant="primary">Link BsButton</BsButton>
        </BsCard.Body>
      </BsCard>
    </>

  )
}

export default App
