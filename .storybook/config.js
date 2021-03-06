import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import pkg from '../package.json'

setOptions({
  name: pkg.name,
  url: 'https://nimbletank.com',
  downPanelInRight: false
})

function loadStories() {
  require('./stories/Button.js')
  require('./stories/Link.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
