// import styled from 'styled-components';

// export const Text = styled.p`
// color: ${(props) => props.color || 'purple'};
// font-weight: ${(props) => (props.bold ? '900' : '')};
// `;

// export const TextWrapper = styled.p`
// color: ${(props) => props.color || 'purple'};
// font-weight: ${(props) => (props.bold ? '900' : '')};
// `;

//-3 import { TextWrapper } from "./styles";

import * as S from "./styles";

export const Text = (props) => {
    //return (<TextWrapper color={props.color}>{props.children}</TextWrapper>)
    //-3 return (<TextWrapper {...props}>{props.children}</TextWrapper>)
    return (<S.TextWrapper {...props}>{props.children}</S.TextWrapper>)
}