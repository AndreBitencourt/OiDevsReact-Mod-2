import style from './text-second.modules.css?inline'

export const TextSecond = (props) =>{
    return(
        <div className={style.classeTeste}>
            {props.children}
        </div>
    )
}