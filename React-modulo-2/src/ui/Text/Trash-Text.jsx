// import './text-style.css'
//import styles from './text-style.modules.css?inline'
import {styles} from './styles'

// const styles = {
//     title: {
//         color: 'blue',
//         fontWeight: 'bold'
//     }
// }

export const Text = (props) => {
    const classes = props.bold ? 'bold' : ''

    return (
        // <div className={{...styles.title, classes}}>
        //     {props.children}
        // </div>
        <div style={styles.title}>
            {props.children}
        </div>
    )
}