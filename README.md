# rc-keypad

> Simple keypads for react

[![NPM](https://img.shields.io/npm/v/rc-keypad.svg)](https://www.npmjs.com/package/rc-keypad) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rc-keypad
```

## Usage

```tsx
import React from 'react'
import { AlphabetOnlyKeypad } from 'rc-keypad'
const App = () => {
  return <AlphabetOnlyKeypad
      onKeyPress={(key) => console.log(key)}
      colorMode='dark'
    />
}

```

![Peek 2023-03-31 14-57](https://user-images.githubusercontent.com/13695694/229082412-e2b01e78-17d1-416a-aabb-1f3edf1d6092.gif)


## License

MIT © [hmharshith](https://github.com/hmharshith)
