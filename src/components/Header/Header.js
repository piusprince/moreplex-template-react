import React from 'react'

import {
    HeaderWrapper,
    HeaderText,
    HeaderTagLine,
    HeaderSubText,
    HeaderImgWrapper,
    HeaderImg,
    HeaderImg2
} from './HeaderStyle'

import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi'

import blackwoman1 from '../../Assets/images/blackwoman1.webp'
import blackwoman2 from '../../Assets/images/blackwoman2.webp'

const Header = () => {
    return (
        <HeaderWrapper>
            {/* <FiArrowRightCircle  style={{alignItems: 'center'}}/>
            <FiArrowLeftCircle /> */}
            <HeaderText>
                <HeaderTagLine>Who are we?</HeaderTagLine>
                <HeaderSubText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Mattis pellentesque id nibh tortor. Tortor at auctor 
                    urna nunc id cursus metus aliquam. Velit euismod in pellentesque massa.
                </HeaderSubText>
            </HeaderText>

            <HeaderImgWrapper>
                <HeaderImg src={blackwoman1} alt="Header woman 1"/>
                <HeaderImg2 src={blackwoman2} alt="Header woman 2"/>
            </HeaderImgWrapper>
        </HeaderWrapper>
    )
}

export default Header
