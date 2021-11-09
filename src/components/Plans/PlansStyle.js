import styled from "styled-components";

export const PlansWrapper = styled.section`
    padding: 5rem;
`

export const PlansTitle = styled.h2`
    font-size: 4.8rem;
    text-align: center;
    margin-bottom: 5rem;
`

export const PlansContainer = styled.div`
    display: grid;
    grid-template-areas: "a b";
`

export const PlansTextContainer = styled.div`
    grid-area: a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
`

export const PlansSubText = styled.p`
    font-size: 1.8rem;
`

export const PlansTagLine = styled.h3`
    margin: 2rem 0;
    font-size: 3.6rem;
    font-weight: normal;
`

export const PlansLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.2rem;
`

export const PlansLinkText = styled.p`
    
`

export const PlansLink = styled.button`
    margin-left: 1rem;
    padding: 1.6rem;
    border: .2rem solid #FEE9CF;
    border-radius: 2.8rem;
    background-color: white;
    cursor: pointer;
`

export const PlansImg = styled.img`
    grid-area: b;
    border-radius: 2.8rem;
    width: 54.3rem;
    height: 36rem;
`