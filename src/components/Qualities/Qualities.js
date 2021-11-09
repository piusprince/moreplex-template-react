import React from 'react'
import { qualities } from '../../data'

import {
    QualitiesWrapper,
    QualitiesTitle,
    Wrapper,
    QualityContainer,
    QualityIcon,
    QualityTagLine,
    QualityText
} from './QualitiesStyle'


const Qualities = () => {
    return (
        <QualitiesWrapper>
            <QualitiesTitle>Why use our products</QualitiesTitle>

            <Wrapper>

                {
                    qualities.map(quality => (
                        
                            <QualityContainer key = {quality.id}>
                                <QualityIcon src = {quality.icon} alt = {quality.title} />
                                <QualityTagLine>{quality.title}</QualityTagLine>
                                <QualityText>{quality.desc}</QualityText>
                            </QualityContainer>
                    
                    ))
                }
            </Wrapper>

        </QualitiesWrapper>
    )
}

export default Qualities
