import React from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from '@storybook/addon-knobs'
import JSXAddon from 'storybook-addon-jsx'
import withReadme from 'storybook-readme/with-readme'

// Components
import Link from '../../components/Link'
import LinkReadMe from '../../components/Link/readme.md'

setAddon(JSXAddon)
const stories = storiesOf('Link', module)
stories.addDecorator(withKnobs)

stories
  .addWithJSX(
    'Default link',
    withReadme(LinkReadMe, () => (
      <Link
        href='https://nimbletank.com'
      >
        {text('Link text', 'Default link')}
      </Link>
    ))
  )
