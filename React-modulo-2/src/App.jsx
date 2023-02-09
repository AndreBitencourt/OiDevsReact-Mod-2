import { Navbar } from './components/NavBar/navbar'
import { Header } from './components/header'
//import styled from 'styled-components'

import { Grid, GridItem } from './ui/grid/grid'

//display: ${(props) => props.display || 'block'};
//grid-column: ${(props) => props.gridColumn}
// const Grid = styled.div`
// display: grid;
// height: 100vh;
// grid-template-columns: 20% 80%;
// height: 100%;
// position: relative;
// `;

// const GridItem = styled.div`
// position: relative;
// `;

const App = () => {
    return (
        <Grid templateColumns={'20% 80%'}>
            <GridItem>
                <Navbar />
            </GridItem>
            <GridItem>
                <Header />
            </GridItem>
        </Grid>
    )
}

export default App
