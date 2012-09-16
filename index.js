
module.exports = function (string) {
  // Trim the extra whitespace on both ends of the string.
  string = string.replace(/(^\s\s*|\s\s*$)/g, '');
  // Replace the whitespace on the beginning and end of the string with a single space.
  string = string.replace(/(^\s\s*|\s\s*$)/gm, ' ');

  return string;
};
