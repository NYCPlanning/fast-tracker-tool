var test_zoning = "R4 Infill";
var position = 2;
var digits_array = Split("1234567890", "");
var zoning_array = Split($feature.ZONEDIST, "");
var first_char = zoning_array[0];
var second_char = zoning_array[1];
var third_char;

// TODO: refactor me!
if (
  HasValue(zoning_array, position) && Includes(digits_array, zoning_array[2])
) {
  third_char = zoning_array[2];
}

Console(`Character at index ${position}: ${third_char}`);
Console(`Zoning as array: ${zoning_array}`);

if (first_char == "M" || first_char == "C") {
  return "C or M District";
} else if (first_char == "R") {
  // TODO: refactor me!
  if (Count(zoning_array) > 2 && !IsEmpty(third_char)) {
    return "High Density";
  } else if (second_char >= "1" && second_char <= "4") {
    return "Low Density";
  } else if (second_char >= "5" && second_char <= "9") {
    return "High Density";
  }
} else {
  return "Other";
}