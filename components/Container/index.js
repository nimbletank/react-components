/**
 * Container component
 * Generic container component that wraps other content
 *
 *
 * import {Container} from 'nimbletank-components'
 *  or
 * import Container from 'nimbletank-components/components/Container'
 *
 *
 * Additional boolean attributes to allow for other specific classes to be added:
 * `narrow` > `.Container--narrow`
 * `mid` > `.Container--mid`
 * `wide` > `.Container--wide`
 * `full` > `.Container--full`
 *
 *
 * Usage: <Container>Foo Bar</Container>
 * Output: <div class="Container">Foo Bar</div>
 *
 * Usage: <Container wide>Foo Bar</Container>
 * Output: <div class="Container Container--wide">Foo Bar</div>
 *
 * Usage: <Container tag="section">Foo Bar</Container>
 * Output: <section class="Container">Foo Bar</section>
 *
 *
 * Classes used:
 * `.Container`
 * `.Container--narrow`
 * `.Container--mid`
 * `.Container--wide`
 * `.Container--full`
 *
 * Other classes can be added if the `className` attribute is used
 */

import React from 'react'
import Element from '../Element'
import classNames from 'classnames'

const Container = ({
  tag = 'div',
  children,
  narrow,
  mid,
  wide,
  full,
  ...rest
}) => {
  let ContainerClass = classNames(
    'Container',
    {
      'Container--full': full,
      'Container--wide': wide,
      'Container--mid': mid,
      'Container--narrow': narrow
    },
    rest.className
  )
  return (
    <Element
      tag={tag}
      className={ContainerClass}
      children={children}
      {...rest}
    />
  )
}

export default Container
