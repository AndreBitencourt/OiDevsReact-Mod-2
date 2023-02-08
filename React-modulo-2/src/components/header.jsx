import { Avatar } from './avatar'
import { Text } from '../ui/Text'
import { Button } from './button'

export const Header = (props) => {
    return (
        <>
            {/* {props.children} */}
            <Avatar />
            <Text bold={true}>@adaTech</Text>
            <Button>
                <Text>Seguindo</Text>
            </Button>
            <Button>
                <Text>Enviar Mensagem</Text>
            </Button>
            <Text>211 publicações</Text>
            <Text>44,2 mil seguidores</Text>
            <Text>2 seguindo</Text>
        </>
    )
}