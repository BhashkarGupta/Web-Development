# Open quotes

[![GitHub release](https://img.shields.io/github/v/release/codesandtags/open-quotes.svg)]()
[![NPM Version](https://img.shields.io/npm/v/open-quotes.svg)]()

A Typescript/JavaScript library with Software quotes from developers or people in the Tech industry, coming from Open Source to big tech speakers, and writers.

## Getting started

### Install package

```sh
npm install open-quotes
```

or

```sh
yarn add open-quotes
```

### Usage

Using CommonJS

```js
// CommonJS
const quotes = require('open-quotes');

console.log(quotes.getAllQuotes());

console.log(quotes.getQuotesByCategory('Programming'));
```

Using ES6 Modules or TypeScript:

```js
// ES6 Modules or TypeScript
import quotes from 'open-quotes';

console.log(quotes.getAllQuotes());

console.log(quotes.getQuotesByCategory('Programming'));
```

**Example output**:

```json
[
  {
    "quote": "Time is what we want most, but what we use worst.",
    "author": {
      "name": "William Penn",
      "link": "https://en.wikipedia.org/wiki/William_Penn",
      "profileImage": "https://en.wikipedia.org/wiki/File:WilliamPenn.jpg"
    },
    "categories": ["Productivity"]
  },
  {
    "quote": "Everything in software architecture is a trade-off. First law of Software Architecture.",
    "author": {
      "name": "Fundamentals of Software Architecture",
      "link": "https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/",
      "profileImage": "https://learning.oreilly.com/library/cover/9781492043447/250w/"
    },
    "categories": ["Software Architecture"]
  },
  {
    "quote": "A person who never made a mistake never tried anything new.",
    "author": {
      "name": "Albert Einstein",
      "link": "https://en.wikipedia.org/wiki/Albert_Einstein",
      "profileImage": "https://en.wikipedia.org/wiki/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
    },
    "categories": ["Life"]
  }
]
```

## API Reference

### getAllQuotes()

Returns all quotes from the library.

### getQuotesByCategory(category: string)

Returns all quotes from the library filtered by category.

## Contribute

If you want to contribute to this project or add your quotes, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file.
