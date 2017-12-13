/**
 * Button component
 * Generic button component
 *
 *
 * import {Button} from '@nimbletank/react-components'
 *  or
 * import Button from '@nimbletank/react-components/dist/Button'
 *
 *
 * Additional boolean attributes allow for other specific classes to be added:
 * `block` > `.Button--block`
 *
 * @param {string} className - Additional class for the button
 * @param {func} onClick - onClick function for the button
 *
 * Usage: <Button className="foo-bar" onClick={handleClick}>Foo Bar</Button>
 * Output: <button class="Button foo-bar">Foo Bar</button>
 *
 * Usage: <ButtonPrimaryLink href="https://nimbletank.com" onClick={handleClick}>Foo Bar</ButtonPrimaryLink>
 * Output: <a href="https://nimbletank.com">Foo Bar</a>
 *
 */
import React from 'react'
import styled, { css } from 'react-emotion'
import { ds } from '../../../theme'

const buttonCSS = css`
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  border: none;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  line-height: 2.5;
  height: 2.5em;
  padding-right: 1.5em;
  padding-left: 1.5em;
  overflow: visible;
  text-align: center;
  user-select: none;
  border-radius: ${ds.get('borderRadius')};
  font-weight: ${ds.get('type.fontWeight.bold')};

  &,
  &:link,
  &:visited {
    background-color: ${ds.color('primary')};
    color: ${ds.color('bright')};
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${ds.color('primary', 'light')};
  }

  &,
  &:hover,
  &:active,
  &:focus,
  &:visited {
    text-decoration: none;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &[disabled] {
    cursor: default;
    background-image: none;
    opacity: 0.5;
  }
`

export const Button = styled('button')`
  ${buttonCSS};
`

export const LinkButton = Button.withComponent('a')

export const ButtonBlock = styled('button')`
  ${buttonCSS};
  display: block;
  width: 100%;
  padding-left: 0;
  padding-right: 0;

  & + & {
    margin-top: 10px;
  }
`

export const ButtonAlt = styled('button')`
  ${buttonCSS};

  &,
  &:link,
  &:visited {
    background-color: ${ds.color('secondary')};
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${ds.color('secondary', 'light')};
  }
`

export const LinkButtonAlt = ButtonAlt.withComponent('a')
