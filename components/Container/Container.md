# Container component
> Generic container component that wraps other content

## Usage
```js
import {Container} from 'nimbletank-components'
// or
import Container from 'nimbletank-components/components/Container'
```

### Additional boolean attributes to allow for other specific classes to be added:
* `narrow` > `.Container--narrow`
* `mid` > `.Container--mid`
* `wide` > `.Container--wide`
* `full` > `.Container--full`

## Classes used:
* `.Container`
* `.Container--narrow`
* `.Container--mid`
* `.Container--wide`
* `.Container--full`

Other classes can be added if the `className` attribute is used

```jsx
// Usage:
<Container>Foo Bar</Container>
// Output:
<div class="Container">Foo Bar</div>

// Usage:
<Container wide>Foo Bar</Container>
// Output:
<div class="Container Container--wide">Foo Bar</div>

// Usage:
<Container tag="section">Foo Bar</Container>
// Output:
<section class="Container">Foo Bar</section>
```
