import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import {
    PlansWrapper,
    PlansTitle,
    PlansContainer,
    PlansTextContainer,
    PlansSubText,
    PlansTagLine,
    PlansLinkContainer,
    PlansLinkText,
    PlansLink,
    PlansImg
} from './PlansStyle'

import group from '../../Assets/images/group.webp'

const Plans = () => {
    return (
        <PlansWrapper>
            <PlansTitle>What's our next step</PlansTitle>
            <PlansContainer>
                <PlansTextContainer>
                    <PlansSubText>
                        Our core ambition is empowering people
                        by helping them acquire knowledge on 
                        making their own products. As such, we bring to you...   
                    </PlansSubText>
                    <PlansTagLine>Moreplex E-Learning Platform</PlansTagLine>
                    <PlansLinkContainer>
                        <PlansLinkText>want to know more?,</PlansLinkText>
                        <PlansLink>
                            Click here
                            <FaArrowRight style={{fontSize: '1rem', fontWeight: 'normal', marginLeft: '1rem'}}/>
                        </PlansLink>
                    </PlansLinkContainer>
                </PlansTextContainer>
                <PlansImg src={group}/>
            </PlansContainer>
        </PlansWrapper>
    )
}

export default Plans
