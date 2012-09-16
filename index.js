
module.exports = function (string) {
  // Trim the extra whitespace on both ends of the string.
  string = string.replace(/(^\s\s*|\s\s*$)/g, '');
  string = string.replace(/((\r\n|\n|\r) +| +(\r\n|\n|\r))/, ' ');

  // Remove the newline characters, in their various formats.
  string = string.replace(/(\r\n|\n|\r)/gm, '');

  return string;
};
