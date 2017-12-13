import React from 'react'
import styled, { css } from 'react-emotion'
import { ds, fontFamily } from '../../../theme'

const TypeItemWrapper = styled('div')`
  margin-bottom: ${ds.spacing(3)};
  padding: ${ds.spacing(1)};
  background-color: ${props =>
    props.bg === 'dark' ? `${ds.color('dark')}` : `${ds.color('bright')}`};
  color: ${props =>
    props.bg === 'dark' ? `${ds.color('bright')}` : `${ds.color('dark')}`};
  font-family: ${ds.get('type.fontFamily.system')};
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
  font-size: 80px;
  font-family: ${({ font }) => font};
  margin-bottom: ${ds.spacing(1)};
`

const TypeItemInfo = styled('div')`
  font-size: 12px;
  font-family: ${ds.get(`type.fontFamily.mono`)};
`

/**
 * A single typography example
 */
const TypeItem = props => {
  console.log('props', props)
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
  padding: ${ds.spacing(1)};
  font-family: ${ds.get('type.fontFamily.system')};
  background-color: ${props =>
    props.bg === 'dark' ? `${ds.color('dark')}` : `${ds.color('bright')}`};
  color: ${props =>
    props.bg === 'dark' ? `${ds.color('bright')}` : `${ds.color('dark')}`};
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
