import React from 'react'
import styled from 'styled-components'
import { DishProps } from './types'

const StyledArticle = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 40rem;
`

const StyledImage = styled.img`
  display: block;
  object-fit: cover;
  margin-right: 1.25rem;
  width: 225px;
  height: 150px;
  border: 0.25rem solid #c59d5f;
  border-radius: 0.25rem;
`

const StyledTextWrapper = styled.div`
  flex-basis: 225px;
  flex-grow: 1;
`

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px dotted #617d98;
  margin-bottom: 1rem;
`

const Name = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: #102a42;
`

const Price = styled.span`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: #c59d5f;
`

const Description = styled.p`
  color: #617d98;
  overflow: hidden;
  line-height: 1.5;
`

export default function Dish(props : DishProps) : JSX.Element {
  return (
    <StyledArticle className="dish">
      <StyledImage src={props.imageUrl} alt="dish" />
      <StyledTextWrapper>
        <StyledHeader>
          <Name className="name">{props.name}</Name>
          <Price className="price">${props.price}</Price>
        </StyledHeader>
        <Description>
          {props.description}
        </Description>
      </StyledTextWrapper>
    </StyledArticle>
  )
}