
# diet-cola

A lightweight
[styled-components](https://github.com/styled-components/styled-components)
clone for creating React UI component primitives.
Built with
[stylis](https://github.com/thysultan/stylis.js) and
[glamor](https://github.com/threepointone/glamor).

```sh
npm i diet-cola
```

```js
import dc from 'diet-cola'

const Button = dc('button')(`
  font-family: inherit;
  font-size: inherit;
  padding: 8px;
  margin: 0;
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 4px;
  appearance: none;
  &:hover {
    background-color: black;
  }
`)
```

## Features

- Under 10KB
- Create UI component primitives with a simple API
- Use plain CSS strings
- Pseudoclass support
- Media query support
- CSS animation support
- Injects style before rendering
- Server-side rendering support


## Motivation

Styled Components is an excellent API for creating UI component primitives in React,
but in its current state, it has several features that might not be needed for most use cases.
This library is also meant as a proof of concept of using existing libraries to create a small, custom css-in-js solution.


## Differences

Compared to styled-components, diet-cola:

- Has no theme support - (though thematic constants can be imported)
- No dynamic styling
- Styles injected on module instantiation, independent of render props
- No React Native support
- No management of HTML elements or attributes
- Relies on the glamor and stylis libraries
- Only 48 custom LOC
- Potentially smaller and more performant


### Related:

- [cxs-components](https://github.com/jxnblk/cxs/tree/master/packages/cxs-components)
- [cxs](https://github.com/jxnblk/cxs)
- [glamor](https://github.com/threepointone/glamor)
- [stylis](https://github.com/thysultan/stylis.js)
- [styled-components](https://github.com/styled-components/styled-components)


MIT License
