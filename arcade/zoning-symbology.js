var zoning_array = Split($feature.ZONEDIST, "");
var digits_array = Split("1234567890", ""); // To test if a character is a digit
var first_char = zoning_array[0];
var second_char = zoning_array[1];
var zoning_category; // Initialize as null, assign later

Console(`Zoning as array: ${zoning_array}`);
Console(`Zoning array length: ${Count(zoning_array)}`);

// Assign third character to variable, if it exists
if (Count(zoning_array) < 3) {
  var third_char;
} else {
  var third_char = zoning_array[2];
}

Console(`First character (index 0): ${first_char}`);
Console(`Second character (index 1): ${second_char}`);
Console(`Third character (index 2): ${third_char}`);

if (first_char == "C" || first_char == "M") {
  zoning_category = "C or M (including MX)";
} else if (first_char == "R") {
  // Test if 3rd character is a digit by comparing to the digits array.
  // R10 and greater = High Density
  if (Includes(digits_array, third_char)) {
    zoning_category = "R5 - R10";
    // R1 - R4 = Low Density
  } else if (second_char >= "1" && second_char <= "4") {
    zoning_category = "R1 - R4";
    // R5 - R9 = High Density
  } else if (second_char >= "5" && second_char <= "9") {
    zoning_category = "R5 - R10";
  }
} else {
  // Everything else = Other
  zoning_category = "Ineligible";
}

Console(`Category: ${zoning_category}`);
return zoning_category;