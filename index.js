
module.exports = function (string) {
  // Remove the newline characters, in their various formats, and erroneous extra spaces.
  string = string.replace(/(\s\s+|\r\n|\n|\r)/gm, '');

  return string;
};
