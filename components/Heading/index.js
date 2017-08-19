/**
 * Heading component
 * This forces two required classes based on the `type` prop
 *
 * @param {integer} type the heading tag you are using. from 1-6
 * @param {object} props any other props that you need
 *
 * Usage: <Heading type="2">Foobar</Heading>
 * Output: <h2 class="heading heading2">Foobar</h2>
 */

import React from 'react'
import Element from '../Element'
import classNames from 'classnames'

const Heading = ({ type = 1, ...rest }) => {
  const tagNumber = type
  const tag = `h${type}`

  const classes = classNames('heading', `heading${tagNumber}`, rest.className)

  return <Element tag={tag} className={classes} {...rest} />
}

export default Heading

/**
 * Individual heading components
 *
 * @param {object} props and props that you need to add
 *
 * Usage: <H1>Foobar</H1>
 * Output: <h1 class="heading heading1">Foobar</h1>
 *
 * or:
 * Usage: <H1 className="foobar">Foobar</H1>
 * Output: <h1 class="heading heading1 foobar">Foobar</h1>
 */
export const H1 = props => <Heading {...props} type='1' />
export const H2 = props => <Heading {...props} type='2' />
export const H3 = props => <Heading {...props} type='3' />
export const H4 = props => <Heading {...props} type='4' />
export const H5 = props => <Heading {...props} type='5' />
export const H6 = props => <Heading {...props} type='6' />

export const Title = props => <Element {...props} tag='h1' className='Title' />

export const Subtitle = props =>
  <Element {...props} tag='h2' className='Subtitle' />
