import React from 'react'
import {products} from '../../data'

import {
    ProductsWrapper,
    ProductsTitle,
    ProductsContainer,
    ProductTexts,
    ProductTagLine,
    ProductDesc,
    ProductImg,
    ProductLink
} from './ProductsStyle'


const Products = () => {
    return (
        <ProductsWrapper>
            <ProductsTitle>Get to know what we produce</ProductsTitle>

           {
               products.map(product => (
                   <ProductsContainer key={product.id}>
                       <ProductTexts>
                            <ProductTagLine>{product.tagLine}</ProductTagLine>
                            <ProductDesc>{product.desc}</ProductDesc>
                           <ProductLink>Learn More</ProductLink>
                       </ProductTexts>
                       <ProductImg src={product.img} alt="Product image"/>
                   </ProductsContainer>
               ))
           }
        </ProductsWrapper>
    )
}

export default Products
