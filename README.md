`react-spring-universal-carousel`

<br />

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/react-spring-universal-carousel">
    <img alt="" src="https://badgen.net/npm/v/react-spring-universal-carousel">
  </a>
  <a aria-label="Package size" href="https://bundlephobia.com/result?p=react-spring-universal-carousel">
    <img alt="" src="https://badgen.net/bundlephobia/minzip/react-spring-universal-carousel">
  </a>
  <a aria-label="License" href="https://github.com/zeit/swr/blob/master/LICENSE">
    <img alt="" src="https://badgen.net/npm/license/react-spring-universal-carousel">
  </a>
</p>


## Introduction

This is a **no-frills** carousel that can be server side rendered. If you happen upon another reach carousel component that can be server side rendered without any ["layout shift"](https://web.dev/cls/) please let us know ([open an issue](https://github.com/stackshirts/react-spring-universal-carousel/issues/new)), and we will add a comparison to it.

```markdown
// TODO: comparison matrix with nuka-carousel and others
```

Also it uses react-spring for *silky* smooth drag animations. Furthermore, if you are already using `react-spring`, then the incremental weight of this library is negligible.

```markdown
// TODO: library size comparison when react-spring is an existing dependency and not.
```

## Examples

- [With bootstrap](https://codesandbox.io/s/github/stackshirts/react-spring-universal-carousel/tree/master/examples/with-bootstrap)
- [With styled-jsx](https://codesandbox.io/s/github/stackshirts/react-spring-universal-carousel/tree/master/examples/with-styled-jsx)

Both of these examples use NextJS for easy server side rendering.

## Quick Start

Inside your React project directory, run the following:

```
yarn add react-spring-universal-carousel
```

Or with npm:

```
npm install react-spring-universal-carousel
```

### Carousel

NOTE: It is well-advised to first style your carousel **without** the Carousel component. Wrap your row of items in a div with `overflow: scroll` to see that it behaves.

```jsx
<div style={{ overflowX: 'scroll'}}>
  <Row />
</div>
```

Once you've done that, just replace the wrapping `div` with the Carousel component:

```jsx
import Carousel from 'react-spring-universal-carousel'

function Page() {
  return (
    <Carousel>
      <Row />
    </Carousel>
  )
}
```

That's all there is to it. Holler if you have questions or encounter bugs!
