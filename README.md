# JSON File Operations

This code provides functions to write JSON data to a file and read JSON data from a file.

## Installation

Make sure you have Node.js installed on your machine.
Run `npm install` to install the required dependencies.

## Usage

1. To write JSON data to a file:
```javascript
const { writeJsonToFile } = require('./fileOperations');

const data = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

const filePath = 'data.json';

const result = writeJsonToFile(data, filePath);
console.log(result); // Output: 'OK' if successful
```

2. To read JSON data from a file:
```javascript
const { readJsonFromFile } = require('./fileOperations');

const filePath = 'data.json';

readJsonFromFile(filePath)
  .then((json) => {
    console.log(json); // Output: Parsed JSON data object
  })
  .catch((error) => {
    console.error(error);
  });
```

## Functions

- `writeJsonToFile(jsonObj, filePath)`: Writes JSON data object to a file.
- `readJsonFromFile(filePath)`: Reads JSON data from a file and returns the parsed object.

## License

This project is licensed under the MIT License - see the [The MIT License](LICENSE.TXT) file for details.
