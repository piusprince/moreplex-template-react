import styled from "styled-components";


export const HeaderWrapper = styled.header`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    background-color:  #FEE9CF;
    width: 144rem;
    max-width: 100%;
    height: auto;
    padding: 10rem 10rem 0;
`

export const HeaderText = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const HeaderTagLine = styled.h1`
    margin-bottom: 5rem;
    font-weight: bold;
    font-size: 4.8rem;
`

export const HeaderSubText = styled.p`
    font-size: 1.6rem;
`

export const HeaderImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const HeaderImg = styled.img`

`

export const HeaderImg2 = styled.img`
    margin-left: -8rem;
`