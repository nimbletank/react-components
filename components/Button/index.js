/**
 * Button component
 * Generic button component that allows the use of different tags,
 * e.g. `<button>` / `<a>`
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
 * `link` > `.Button--link`
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
 * `.Button--link`
 *
 * Other classes can be added if the `className` attribute is used
 */

import React from 'react'
import Element from '../Element'
import classNames from 'classnames'

const Button = ({ tag = 'button', primary, secondary, link, ...rest }) => {
  const classes = classNames(
    'Button',
    {
      'Button--primary': primary,
      'Button--secondary': secondary,
      'Button--link': link
    },
    rest.className
  )

  return (
    <Element tag={tag} className={classes} children={rest.children} {...rest} />
  )
}

export default Button
