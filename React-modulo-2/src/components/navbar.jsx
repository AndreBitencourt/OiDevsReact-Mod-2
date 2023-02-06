//import {Title} from './title'

// export const Navbar = () => {
//     return(
//         <>
//         <Title />
//         </>
//     )
// }

export const Navbar = (props) => {
    return(
        <>
        {props.children}        
        </>
    )
}