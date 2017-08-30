/**
 * Link component
 * Generic link component, (not to be confused with the `<Button />` component)
 *
 *
 * import {Link} from '@nimbletank/react-components'
 *  or
 * import Link from '@nimbletank/react-components/dist/Link'
 *
 *
 * @param {string} className - Additional class for the button
 * @param {func} onClick - onClick function for the button
 *
 * Usage: <Link href="https://nimbletank.com" onClick={handleClick}>Foo Bar</Link>
 * Output: <a href="https://nimbletank.com" class="Link">Foo Bar</a>
 *
 * Usage: <Link href="https://nimbletank.com" className="fooBar" onClick={handleClick}>Foo Bar</Link>
 * Output: <a href="https://nimbletank.com" class="Link fooBar">Foo Bar</a>
 *
 * Classes used:
 * `.Link`
 *
 * Other classes can be added if the `className` attribute is used
 */

import React from 'react'
import Element from '../Element'
import classNames from 'classnames/bind'
import styles from './styles.css'
let cx = classNames.bind(styles)

const Link = ({
  tag = 'a',
  ...rest
}) => {
  const classes = cx(
    'Link',
    rest.className
  )

  return (
    <Element
      tag={tag}
      className={classes}
      children={rest.children}
      {...rest}
    />
  )
}

export default Link
