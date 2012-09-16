
module.exports = function () {
  var oneline = function (string, dont_trim) {
    // Remove the newline characters, in their various formats.
    var onelined = string.replace(/(\r\n|\n|\r)/gm, '');

    if (dont_trim) { return onelined; }

    // Trim the extra whitespace on both ends of the string.
    var trimmed = onelined.replace(/^\s\s*/, '').replace(/\s\s*$/, '');

    return trimmed;
  };

  return oneline;
};
