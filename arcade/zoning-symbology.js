function isCommercialOnly(zd_array) {
  return zd_array[0] == "C";
}

function isMixedUse(zd_array) {
  return zd_array[0] == "M" && Includes(zd_array, "/");
}

function isManufacturingOnly(zd_array) {
  return zd_array[0] == "M" && !isMixedUse(zd_array);
}

function isResidence(zd_array) {
  return zd_array[0] == "R";
}

function containsResidence(zd_array) {
  return Includes(zd_array, "R");
}

function isDigit(character) {
  var isDigit = Find(character, "0123456789") != -1;
  return isDigit;
}

function getResidenceBase(zd_array) {
  // ------------------------------------------
  // Extracts the base from a residence zoning district, or -1 when
  // no residence zoning is present. For example:
  //  M1-1/R6A returns 6
  //  R5 returns 5
  //  Park returns -1
  //  C8-4 returns -1
  // Arg:
  //  zd_array (array) --> NYC zoning district as array
  // Return:
  //  residence base zoning (number)
  //   OR
  //  -1 (when no residence zoning is present)
  // ------------------------------------------
  
  // Get the index of "R" within the zoning array
  var r_idx = IndexOf(zd_array, "R");
  // Return -1 if no "R" is present (note this doesn't exclude "Park")
  if (r_idx == -1) {
    return -1;
  }
  // Get arrays of all characters, both w/ and w/out the "R" prefix
  var all_chars = Slice(zd_array, r_idx);
  var after_r = Slice(all_chars, 1);

  // Accumulate all consecutive numeric characters, after "R" prefix
  var digits = "";
  for (var i = 0; i < Count(after_r); i++) {
    var char = after_r[i];
    if (isDigit(char)) {
      digits += char;
    } else {
      break; // Stop at first non-digit
    }
  }
  // Return characters as number
  if (digits != "") {
    return Number(digits);
  }
  return -1;
}

function getZoningCategory(zoning_district) {
  // ------------------------------------------
  // Takes an NYC Zoning District and returns the Green Fast Track zoning category.
  // Arg:
  //  zoning_district (string) --> NYC zoning district (e.g. R4, M1-2/R11, Park)
  // Return:
  //  zoning category (string), which is one of:
  //    R1 - R4
  //    R5 - R10
  //    C or M (including MX)
  //    Other
  // ------------------------------------------
  var zoning_array = Split(zoning_district, "");

  // Commercial or Manufacturing only
  if (isCommercialOnly(zoning_array) || isManufacturingOnly(zoning_array)) {
    return "C or M (including MX)";
  }

  // Mixed use
  if (isMixedUse(zoning_array)) {
    if (
      containsResidence(zoning_array) && getResidenceBase(zoning_array) >= 11
    ) {
      return "Other";
    }
    return "C or M (including MX)";
  }

  // Residential
  if (isResidence(zoning_array)) {
    var res_base = getResidenceBase(zoning_array);
    if (res_base <= 4) {
      return "R1 - R4";
    } else if (res_base < 11) {
      return "R5 - R10";
    } else if (res_base > 11) {
      return "Other";
    }
  }

  // Everything else
  return "Other";
}

// For production ---
var zone_dist = $feature.ZONEDIST;
Console(zone_dist);
getZoningCategory(zone_dist);
// ------------------

// For testing ------
// var districts = [
//   "R11",
//   "C8-4",
//   "R4",
//   "M1-2/R11",
//   "Park",
//   "R12",
//   "R1-2",
//   "M1-2/R5",
//   "MX-11",
//   "R3B",
//   "R10A",
//   "R12D",
//   "R3-B",
//   "R3*Z"
// ];
// for (var zd in districts) {
//   Console(
//     `ZD: ${districts[zd]}, Category: ${getZoningCategory(districts[zd])}`
//   );
// }
// ------------------