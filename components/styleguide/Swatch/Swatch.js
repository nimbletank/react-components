import React from 'react'
import styled, { css } from 'react-emotion'
import { ds } from '../../../theme'
const brandColors = ds.get('colors.brand');

const SwatchWrapper = styled('div')`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 15px;
  text-align: center;
  transition: ${ds.get('transition.default')};
  font-family: ${ds.get('type.fontFamily.system')};
`

const SwatchColor = styled('div')`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
  background-color: ${props => ds.brand(props.name)};
`

const SwatchText = styled('div')`
  font-weight: bold;
  font-size: 60px;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
  color: ${props => ds.brand(props.name)};
`

const SwatchInfo = styled('div')`
  font-size: 13px;
  line-height: 1;
  display: block;
  vertical-align: middle;
  margin: 0 10px;
  font-family: ${ds.get('type.fontFamily.mono')};
`

const SwatchList = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: ${ds.spacing(2)};
  grid-row-gap: ${ds.spacing(2)};
`

/**
 * A colour swatch
 */
const Swatch = props => {
  return (
    <SwatchWrapper>
      <SwatchColor name={props.name} />
      <SwatchText name={props.name}>Aa</SwatchText>
      <SwatchInfo>{props.color}</SwatchInfo>
    </SwatchWrapper>
  )
}


export const Swatches = () => {
  const paletteList = Object.keys(brandColors).map((item, index) => {
    return <Swatch key={index} color={brandColors[item]} name={item} />
  })

  return (
    <SwatchList>
      {paletteList}
    </SwatchList>
  )
}

/** @component */
export default Swatches
