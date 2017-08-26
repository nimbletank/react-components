# Individual heading components

```js
import {H1} from '@nimbletank/react-components'
 or
import H1 from '@nimbletank/react-components/dist/Heading'
```

@param {integer} type the heading tag you are using. from 1-6
@param {object} props any other props that you need

```js
//Usage:
<H1>Foobar</H1>
//Output:
<h1 class="Heading Heading--1">Foobar</h1>

//Usage:
<H2 className="foobar">Foobar</H2>
//Output:
<h2 class="Heading Heading--2 foobar">Foobar</h2>
```

### Classes used:
* `.Heading`
* `.Heading--1`
* `.Heading--2`
* `.Heading--3`
* `.Heading--4`
* `.Heading--5`
* `.Heading--6`

Other classes can be added if the `className` attribute is used

# Titles/Subtitles

```js
import {Title, Subtitle} from '@nimbletank/react-components'
 or
import Title from '@nimbletank/react-components/dist/Heading'
import Subtitle from '@nimbletank/react-components/dist/Heading'
```

@param {object} props any other props that you need

```js
//Usage:
<Title>Foobar</Title>
//Output:
<h1 class="Title">Foobar</h1>

//Usage:
<Subtitle>Foobar</Subtitle>
//Output:
<Subtitle class="Subtitle">Foobar</Subtitle>
```

### Classes used:
* `.Title`
* `.Subtitle`

Other classes can be added if the `className` attribute is used
