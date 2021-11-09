import styled from 'styled-components';

export const TestimonialWrapper = styled.section`
    margin: 5rem;
`

export const TestimonialTitle = styled.h1`
    text-align: center;
    margin-bottom: 5rem;
    font-size: 3.9rem;
`

export const TestimonialBg = styled.div`

    background-image: linear-gradient(114.8deg, #FEE9CF 35.46%, #EC87E4 130.72%);
    border-radius: 2.8rem
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;
    padding: 5rem;
`

export const TestimonialItem = styled.figure`
    padding: 5rem;
    background-color: white;
    border-radius: 2.8rem;
    z-index: 500;


    &:first-child {
        border: 1px solid #EC87E4;
    }

    &:nth-child(3) {
        border: 1px solid #FEE9CF;
    }

`

export const TestimonialDesc = styled.p`
    font-size: 1.6rem;
`

export const TestimonialImg = styled.img`
    margin: 2rem 0;
    border-radius: 50%;
    height: 5.8rem;
    width: 5.8rem;
`

export const TestimonialName = styled.h3`

`

export const TestimonialJob = styled.h4`

`