# Oneliner #

Converts a string that contains line feed characters into one that doesn't.

## Installation ##

```bash
npm install oneliner
```

## Usage ##

```javascript
var oneliner = require('oneliner');

var template = "    <html>\n\n<head></head>\n<body>...</body>\n</html>\n\n     ";

oneliner(template);
```
The output should be:

```javascript
"<html><head></head><body>...</body></html>"
```

To skip the whitespace trimming you may pass 'true' as the optional second argument:

```javascript
oneliner(template, true);
```

And the output should be:

```javascript
"    <html><head></head><body>...</body></html>     ";
```

## Arguments ##

1) The string to oneline.
2) Optionally pass 'true' to skip the whitespace trimming on the beginning and ending of the string.
