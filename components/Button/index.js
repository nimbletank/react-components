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
 * `primary` > `.Button--primary`
 * `secondary` > `.Button--secondary`
 * `block` > `.Button--block`
 *
 * @param {string} className - Additional class for the button
 * @param {func} onClick - onClick function for the button
 *
 * Usage: <Button className="foo-bar" onClick={handleClick}>Foo Bar</Button>
 * Output: <button class="Button foo-bar">Foo Bar</button>
 *
 * Usage: <Button primary tag="a" href="https://nimbletank.com" className="fooBar" onClick={handleClick}>Foo Bar</Button>
 * Output: <a href="https://nimbletank.com" class="Button Button--primary fooBar">Foo Bar</a>
 *
 * Classes used:
 * `.Button`
 * `.Button--primary`
 * `.Button--secondary`
 * `.Button--block`
 *
 * Other classes can be added if the `className` attribute is used
 */

import React from 'react'
import Element from '../Element'
import classNames from 'classnames/bind'
import styles from './styles.css'
let cx = classNames.bind(styles)

const Button = ({
  tag = 'button',
  type = 'button',
  primary,
  secondary,
  block,
  thinking,
  ...rest
}) => {
  const classes = cx(
    'Button',
    {
      'Button--primary': primary,
      'Button--secondary': secondary,
      'Button--block': block,
      'Button--isThinking': thinking,
    },
    rest.className,
  )

  return (
    <Element
      tag={tag}
      type={type}
      className={classes}
      children={rest.children}
      {...rest}
    />
  )
}

export default Button
