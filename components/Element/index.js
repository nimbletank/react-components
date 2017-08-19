/**
 * Element
 * A higher-order component (HOC) used by the other components
 *
 * @param {string} tag the HTML tag that you'd like to use, e.g. `div`, `h1`
 * @param {object} props any other props that you need
 *
 * Usage: <Element tag="section">Foobar</Element>
 * Output: <section>Foobar</section>
 */

import React from 'react'

export const Element = ({ tag = 'div', ...rest }) => {
  const Tag = tag

  return <Tag {...rest} />
}

export default Element
