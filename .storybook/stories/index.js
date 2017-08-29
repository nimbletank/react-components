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
import Button from '../../components/Button'
import ButtonReadMe from '../../components/Button/readme.md'

setAddon(JSXAddon)
const stories = storiesOf('Buttons', module)
stories.addDecorator(withKnobs)

stories
  .addWithJSX(
    'Default button',
    withReadme(ButtonReadMe, () => (
      <Button
        disabled={boolean('Disabled', false)}
        thinking={boolean('Thinking', false)}
      >
        {text('Button text', 'Default Button')}
      </Button>
    ))
  )
  .addWithJSX(
    'Primary button',
    withReadme(ButtonReadMe, () => (
      <Button
        primary
        disabled={boolean('Disabled', false)}
        thinking={boolean('Thinking', false)}
      >
        {text('Button text', 'Primary Button')}
      </Button>
    ))
  )
  .addWithJSX(
    'Secondary button',
    withReadme(ButtonReadMe, () => (
      <Button
        secondary
        disabled={boolean('Disabled', false)}
        thinking={boolean('Thinking', false)}
      >
        {text('Button text', 'Secondary Button')}
      </Button>
    ))
  )
  .addWithJSX(
    'Link button',
    withReadme(ButtonReadMe, () => (
      <Button
        link
        href="https://nimbletank.com"
        disabled={boolean('Disabled', false)}
        thinking={boolean('Thinking', false)}
      >
        {text('Button text', 'Link Button')}
      </Button>
    ))
  )
  .addWithJSX(
    'Block button',
    withReadme(ButtonReadMe, () => (
      <Button
        block
        disabled={boolean('Disabled', false)}
        thinking={boolean('Thinking', false)}
      >
        {text('Button text', 'Block Button')}
      </Button>
    ))
  )
