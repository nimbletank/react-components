import React from 'react'
import styled, { css } from 'react-emotion'
import { ds } from '../../../theme'
import vars from '../vars'
const brandColors = ds.get('colors.brand'); // make dynamic

const SwatchWrapper = styled('div')`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: ${vars.spacing[3]};
  text-align: center;
  font-family: ${vars.type.fontFamily.base};
`

const SwatchColor = styled('div')`
  width: ${vars.type.sizes.l};
  height: ${vars.type.sizes.l};
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
  background-color: ${props => ds.brand(props.name)}; /* make more dynamic */
`

const SwatchText = styled('div')`
  font-weight: bold;
  font-size: ${vars.type.sizes.l};
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
  color: ${props => ds.brand(props.name)};
`

const SwatchInfo = styled('div')`
  font-size: ${vars.type.sizes.s};
  line-height: 1;
  vertical-align: middle;
  margin: ${vars.spacing[1]} 0 0;
  font-family: ${vars.type.fontFamily.mono};
`

const SwatchList = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
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
