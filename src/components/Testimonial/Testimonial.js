import React from 'react'

import {
  TestimonialWrapper,
  TestimonialTitle,
  TestimonialBg,
  TestimonialItem,
  TestimonialDesc,
  TestimonialImg,
  TestimonialName,
  TestimonialJob,
  Wrapper
} from './TestimonialStyle'

import { testimonials } from '../../data'

const Testimonial = () => {
    return (
      <TestimonialWrapper>
        <TestimonialTitle>What our customers say</TestimonialTitle>
        <TestimonialBg>
          <Wrapper>
            {
              testimonials.map(testimonial => (
                <TestimonialItem key={testimonial.id}>
                    <TestimonialDesc>{testimonial.desc}</TestimonialDesc>
                    <TestimonialImg src={testimonial.img} alt="Testimonial" />
                    <TestimonialName>{testimonial.name}</TestimonialName>
                    <TestimonialJob>{testimonial.job}</TestimonialJob>
            
                </TestimonialItem>
              ))
            }
          </Wrapper>
        </TestimonialBg>
      </TestimonialWrapper>
    )
}

export default Testimonial
