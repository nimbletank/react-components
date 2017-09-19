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
import { css } from 'emotion'
import styled from 'react-emotion'

/**
 * Shared button styles
 */
const ButtonCSS = (props) => css`
  display: ${props.block ? 'block' : 'inline-block'};
  width: ${props.block ? '100%' : 'auto'};
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
  border-radius: 5px;
  user-select: none;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1); /* Var */

  &[disabled] {
    cursor: default;
    background-image: none;
    opacity: .5;
  }
`

/**
 * Default button
 */
const ButtonStyles = css`
  ${ButtonCSS};

  &,
  &:link,
  &:visited {
    background-color: #EDEDED; /* Var */
    color: #444; /* Var */
  }

  &:hover,
  &:active,
  &:focus {
    background-color: #D5D5D5; /* Var */
    outline: none;
  }
`

export const Button = styled.button`
  ${ButtonCSS};
  ${ButtonStyles};
`

export const ButtonLink = styled.a`
  ${ButtonCSS};
  ${ButtonStyles};
`

/**
 * Primary button
 */
const ButtonPrimaryStyles = css`
  ${ButtonCSS};

  &,
  &:link,
  &:visited {
    background-color: #3FC1C9; /* Var */
    color: #fff; /* Var */
  }

  &:hover,
  &:active,
  &:focus {
    background-color: #2B8D93; /* Var */
  }
`

export const ButtonPrimary = styled.button`
  ${ButtonCSS};
  ${ButtonPrimaryStyles};
`

export const ButtonPrimaryLink = styled.a`
  ${ButtonCSS};
  ${ButtonPrimaryStyles};
`
