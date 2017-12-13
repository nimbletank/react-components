import React from 'react'
import { contrastRatio } from 'chromatism'
import styled, { css } from 'react-emotion'
import { ds } from '../../../theme'
const allColours = ds.get('colors.colorPalette');

const PaletteItemWrapper = styled('div')`
  border-radius: 10px;
  overflow: hidden;
`

const PaletteItemList = styled('div')`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  font-family: ${ds.get('type.fontFamily.system')};
  padding: ${props => props.base ? `2em 1.5em` : `1.5em`};
  font-weight: ${props => props.base ? `bold` : `normal`};
  background: ${props => props.color};
  color: ${props => contrastRatio(props.color).hex};

  &:first-child {
    border-radius: 10px 10px 0 0;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`
const PaletteItemInner = styled('div')`
  margin-right: 20px;
`

const PaletteItem = ({ color, name }) => {
  const list = Object.keys(color).map((item, index) => {
    return (
      <PaletteItemList key={index} color={color[item]} base={item === 'base' ? true : false}>
        <PaletteItemInner>{item === 'base' ? name : item}</PaletteItemInner>
        <div>{color[item]}</div>
      </PaletteItemList>
    )
  })

  return <PaletteItemWrapper>{list}</PaletteItemWrapper>
}


const PaletteWrapper = styled('div')`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: ${ds.spacing(2)};
  grid-row-gap: ${ds.spacing(2)};
`

export const Palette = () => {
  const paletteList = Object.keys(allColours).map((item, index) => {
    return <PaletteItem key={index} color={allColours[item]} name={item} />
  })

  return (
    <PaletteWrapper>
      {paletteList}
    </PaletteWrapper>
  )
}

export default Palette;
