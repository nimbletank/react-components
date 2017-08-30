# Button component
> Generic button component

## Usage
```js
import {Button} from '@nimbletank/react-components'
// or
import Button from '@nimbletank/react-components/dist/Button'
```

### Additional boolean attributes allow for other specific classes to be added:
* `primary` > `.Button--primary`
* `secondary` > `.Button--secondary`
* `block` > `.Button--block`

## Classes used:
* `.Button`
* `.Button--primary`
* `.Button--secondary`
* `.Button--block`
* `.Button--isThinking` - used for loading states etc

Other classes can be added if the `className` attribute is used

```jsx
// Usage:
<Button primary className="foo-bar" onClick={handleClick}>Foo Bar</Button>
// Output:
<button class="Button Button--primary foo-bar">Foo Bar</button>
```

### Links that look like buttons
```jsx
// Usage:
<Button tag="a" href="https://nimbletank.com" className="fooBar" onClick={handleClick}>Foo Bar</Button>
// Output:
<a href="https://nimbletank.com" class="Button fooBar">Foo Bar</a>
```
