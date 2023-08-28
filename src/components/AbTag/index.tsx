import React from 'react'
import styled from 'styled-components'

export interface AbTagProps {
    texto: string
}

const Tag = styled.div`
    padding: 48px;
    background: #EB9B00;
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
    font-family: sans-serif;
`

const AbTag = ({texto}: AbTagProps) => {
  return (
    <Tag>{texto}</Tag>
  )
}

export default AbTag