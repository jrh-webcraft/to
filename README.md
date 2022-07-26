# @jrh/to

Tiny utility to get an absolute path to a target file using a relative path from a source file in an ES6 module.

## Installation

`npm install @jrh/to`

## Usage

```
import to from '@jrh/to'

const path = to(target, source)
```

## Arguments

| Name | Type | Description |
| :-- | :-- | :-- |
| target | String | The relative path to the target file. |
| source | Object | An object with one key (`from`) which contains the absolute path to the source file (usually `import.meta.url`). |

## Example

Given the file structure:

```
source/
  folder1/
    1.js
  folder2/
    2.js
```

**1.js**
```javascript
import pathTo from '@jrh/to'

const path = pathTo('../folder2/2.js', { from: import.meta.url })
// => /absolute/path/to/folder2/2.js
```
