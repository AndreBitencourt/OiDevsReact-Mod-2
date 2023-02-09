import styled from "styled-components";

export const Grid = styled.div`
display: grid;
height: 100vh;
grid-template-columns: ${(props) => props.templateColumns};
height: 100%;
position: relative;
`;

//grid-template-columns: 20% 80%;

export const GridItem = styled.div`
position: relative;
`;