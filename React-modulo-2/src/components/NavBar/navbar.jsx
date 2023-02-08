//import {Title} from './title'

// export const Navbar = () => {
//     return(
//         <>
//         <Title />
//         </>
//     )
// }

import { NavItem } from '../nav-item'
import { Title } from '../title'

//import styled from 'styled-components';

//import { NavbarWrapper, Box } from './styles';
import * as S from './styles';

const items = [
    'Página Inicial',
    'Pesquisa',
    'Explorar',
    'Reels',
    'Mensagens',
    'Notificações',
    'Criar',
    'Perfil'
];

// const NavbarWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   position: fixed;
//   background-color: #000;
//   height: 100%;
//   width: calc(20% - 60px);
//   padding: 50px 30px;
//   `;
// //   border: 1px solid;

// const Box = styled.div`
// margin-bottom: 30px;
// `;

export const Navbar = (props) => {
    return (
        <>
            {/* {props.children}         */}
            <S.NavbarWrapper>
                <S.Box>
                    <S.Box>
                        <Title />
                    </S.Box>
                    <S.Box>
                        {items.map((item) => (
                            <NavItem key={item} text={item} />
                        ))}
                    </S.Box>
                </S.Box>
                <NavItem text={'Mais'} />
            </S.NavbarWrapper>
        </>
    )
}