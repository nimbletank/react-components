# Button component
> Generic button component that allows the use of different tags, e.g. `<button>` / `<a>`

## Usage
```js
import {Button} from '@nimbletank/react-components'
// or
import Button from '@nimbletank/react-components/dist/Button'
```

### Additional boolean attributes allow for other specific classes to be added:
* `primary` > `.Button--primary`
* `secondary` > `.Button--secondary`
* `link` > `.Button--link`

## Classes used:
* `.Button`
* `.Button--primary`
* `.Button--secondary`
* `.Button--link`

Other classes can be added if the `className` attribute is used

```jsx
// Usage:
<Button className="foo-bar" onClick={handleClick}>Foo Bar</Button>
// Output:
<button class="Button foo-bar">Foo Bar</button>

// Usage:
<Button primary tag="a" href="https://nimbletank.com" className="fooBar" onClick={handleClick}>Foo Bar</Button>
// Output:
<a href="https://nimbletank.com" class="Button Button--primary fooBar">Foo Bar</a>
```
