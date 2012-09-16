# Oneliner #

Converts a string that contains line feed characters into one that doesn't.

## Installation ##

```bash
npm install oneliner
```

## Usage ##

```javascript
var oneliner = require('oneliner');

var template = "    <html>\n\n<head>\n        </head>\n<body>...</body>\n</html>\n\n     ";

oneliner(template);
```
And the output will be:

```javascript
"<html><head> </head><body>...</body></html>"
```
