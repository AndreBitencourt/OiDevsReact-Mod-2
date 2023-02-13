import { useState, React, useEffect } from 'react';

import fundoFixo from '../images/tela-fixa.png'
// import fundo1 from '../images/tela1.png'
// import fundo2 from '../images/tela2.png'
// import fundo3 from '../images/tela3.png'
// import fundo4 from '../images/tela4.png'

import './css/img-dinamica.css'

export const Image = () => {

    const [photoBackground, setPhotoBackground] = useState(1)

    let imgFundo = ('/src/images/tela' + photoBackground + '.png')

    const changePhoto = () => {
        setPhotoBackground(photoBackground + 1)
        if(photoBackground > 3 ? setPhotoBackground(1): '');
    }

    // useEffect(() => {
    //     //setPhotoBackground(photoBackground + 1)
    //     //if (photoBackground > 3 ? setPhotoBackground(1) : '');

    // }, [changePhoto])

    setInterval(() => {
        changePhoto({ photoBackground } + 1)
    }, 4000)

    return (
        <>
            <img src={fundoFixo} />
            <img className='tela-dinamica' src={imgFundo} />
        </>
    )
}

