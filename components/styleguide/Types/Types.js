import React from 'react'
import styled, { css } from 'react-emotion'
import { ds, fontFamily } from '../../../theme'
import vars from '../vars'

const TypeItemWrapper = styled('div')`
  margin-bottom: ${vars.spacing[3]};
  padding: ${vars.spacing[1]};
  background-color: ${vars.colors.bright};
  color: ${vars.colors.dark};
  font-family: ${vars.type.fontFamily.base};
  overflow-x: auto;

  &:last-child {
    margin-bottom: 0;
  }
`

const TypeItemTag = styled('div')`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  opacity: 0.6;
`
const TypeItemName = styled('div')`
  font-size: ${vars.type.sizes.l};
  font-family: ${({ font }) => font};
  margin-bottom: 8px;
`

const TypeItemInfo = styled('div')`
  font-size: ${vars.type.sizes.s};
  font-family: ${vars.type.fontFamily.mono};
`

/**
 * A single typography example
 */
const TypeItem = props => {
  return (
    <TypeItemWrapper bg={props.bg}>
      <TypeItemTag>{props.name}</TypeItemTag>
      <TypeItemName font={props.font}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</TypeItemName>
      <TypeItemInfo>{props.info}</TypeItemInfo>
    </TypeItemWrapper>
  )
}

/**
 * Types
 * Lists all the fonts specified in the `type.fontFamily` object
 */
const TypesWrapper = styled('div')`
  padding: ${vars.spacing[1]};
  font-family: ${vars.type.fontFamily.base};
  background-color: ${vars.colors.bright};
  color: ${vars.colors.dark};
`

/**
 * Lists all the fonts specified in the `type.fontFamily` object
 */
const Types = props => {
  const types = Object.keys(fontFamily).map((item, index) => {
    return (
      <TypeItem
        key={index}
        name={item}
        font={fontFamily[item]}
        info={fontFamily[item]}
      />
    )
  })
  return <TypesWrapper>{types}</TypesWrapper>
}

/** @component */
export default Types
