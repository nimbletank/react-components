# Link component
> Generic link component, (not to be confused with the `<Button />` component)

## Usage
```js
import {Link} from '@nimbletank/react-components'
// or
import Link from '@nimbletank/react-components/dist/Link'
```

## Classes used:
* `.Link`

Other classes can be added if the `className` attribute is used

```jsx
// Usage:
<Link href="https://nimbletank.com">Foo Bar</Link>
// Output:
<a href="https://nimbletank.com" class="Link">Foo Bar</a>

// Alternative usage:
<Link href="https://nimbletank.com" className="fooBar">Foo Bar</Link>
// Output:
<a href="https://nimbletank.com" class="Link fooBar">Foo Bar</a>
```

If you need a link to look like a button, use the `<Button />` component instead, like so:

```jsx
<Button tag="a" href="https://nimbletank.com">Foo Bar</Button>
```
