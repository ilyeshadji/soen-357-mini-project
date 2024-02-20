import React from 'react'
import styled from 'styled-components'

export default function Card({children, width}) {
    return (
        <Container width={width}>
            {children}
        </Container>
    )
}

const Container = styled.div`
  background-color: white;
  width: ${props => props.width ? props.width : '300px'};
  cursor: pointer;
  border: 1px solid lightgrey;
  transition: box-shadow 0.2s ease-in-out;
  border-radius: 10px;

  &:hover {
    box-shadow: 1px 2px 9px dodgerblue;
    border: none;
  }
`
