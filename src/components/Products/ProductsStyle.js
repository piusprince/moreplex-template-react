import styled from "styled-components";

export const ProductsWrapper = styled.section`
    margin-top: 5rem;
    padding: 5rem;
`

export const ProductsTitle = styled.h1`
    font-size: 3.9rem;
    text-align: center;
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin: 5rem 0;
    grid-template-areas: "a b";             
    background-image: linear-gradient(108.78deg, #FEE9CF 11.5%, rgba(254, 233, 207, 0) 75.13%);
    border-radius: 2.8rem;
    overflow: hidden;

    &:nth-child(3) {
        grid-template-areas: "b a"; 
        grid-template-columns: 1fr 2fr;
        background-image: linear-gradient(236.49deg, #FEE9CF 22.81%, rgba(254, 233, 207, 0) 71.99%);
    }
`

export const ProductTexts = styled.div`
    grid-area: a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem;
`

export const ProductTagLine = styled.h2`
    font-size: 2.5rem;
`

export const ProductDesc = styled.p`
    font-size: 1.6rem;
    margin: 5rem 0;
`

export const ProductImg = styled.img`
    grid-area: b;
   
`

export const ProductLink = styled.a`
    font-size: 1.8rem;
    font-weight: bold;
    cursor: pointer;
`