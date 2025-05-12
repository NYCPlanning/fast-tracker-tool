var index_3 = Split($feature.ZONEDIST, "")[2]; // Get the third character (index 2);
Console($feature.ZONEDIST)
Console(index_3)
var value_3 = Number(index_3); // Convert to a number, or null if not numeric;
Console(value_3)

// Check if it starts with M
if (Left($feature.ZONEDIST, 1) == "M") {
    return $feature.ZONEDIST + " = M District";
}
// Check if it starts with C
else if (Left($feature.ZONEDIST, 1) == "C") {
    return $feature.ZONEDIST + " = C District";
}
// Check if it starts with R (Residential)
else if (Left($feature.ZONEDIST, 1) == "R") {
    // Check if the 3rd character is a number (e.g., R10)
    if (Length($feature.ZONEDIST) > 2 && TypeOf(value_3) == 'Number') {
        return $feature.ZONEDIST + " = High Density";
    }
    // If second character is between 1 and 4 (e.g., R1-R4)
    else if (Mid($feature.ZONEDIST, 1, 1) >= "1" && Mid($feature.ZONEDIST, 1, 1) <= "4") {
        return $feature.ZONEDIST + " = Low Density";
    }
    // If second character is between 5 and 9 (e.g., R5-R9)
    else if (Mid($feature.ZONEDIST, 1, 1) >= "5" && Mid($feature.ZONEDIST, 1, 1) <= "9") {
        return $feature.ZONEDIST + " = High Density";
    }
}
// If none of the conditions are met, return Other
else {
    return $feature.ZONEDIST + " = Other";
}