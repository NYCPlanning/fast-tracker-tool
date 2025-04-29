# Changelog
## Fast Tracker Application

All notable changes to this project will be documented in this file.

## [v0.4.1] - 2025-04-30
- Fixes to survey text
- Fixes to report text
### Added

### Fixed
- Added missing section headers to output report, to more closely match the survey
- Made typo and language corrections to output report, to more closely match the survey
- Updated minor missing language in survey

### Changed

### Removed

## [v0.4.0] - 2024-12-04
- Updates to survey language
- Report header data version bug fix
### Added
- Updated helper text for the ```Will your proposal contain non-residential floor area?``` question in the survey.
  - Text went from:

    ```Non-residential floor area includes commercial, community facility, interior/structured parking, manufacturing, or other floor area that is not for mechanical/utility equipment or residential floor area.```

    To:

    ```Non-residential floor area includes commercial, community facility, manufacturing, or other floor area that is not for mechanical/utility equipment. Include structured parking as non-residential floor area when accessory to non-residential uses.```
  - (Addresses [#32](https://github.com/NYCPlanning/fast-tracker-tool/issues/32)) 
### Fixed
- Report header version number bug (Addresses [#29](https://github.com/NYCPlanning/fast-tracker-tool/issues/29))
  - Cell in survey sheet that references the data versions table was referencing an outdated service URL.
    - old URL: https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/GFT_Source_Data_Versions/FeatureServer/54
    - updated URL: https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/v_GFT_Source_Data_Versions/FeatureServer/0
### Changed

### Removed

## [v0.3.0] - 2024-08-07
- Updates to underlying web service architecture
- Various user experience and performance improvements, and bug fixes
### Added
- A mobile user landing screen, indicating the user should use the app on a desktop or laptop computer, not a mobile device (Addresses [#20](https://github.com/NYCPlanning/fast-tracker-tool/issues/20))
  - Minor usability enhancements for tablet/mobile users may be considered in future updates.
### Fixed
- Removed the ability of a user to resize the sidebar widget that contains the survey widget. Ability to *close* sidebar remains in place. Change does not impact the bottom sidebar that contains the data table
  - Fixes a bug in which click dragging the survey sidebar to resize, resulted in the sidebar getting "stuck" to the cursor (Addresses [#21](https://github.com/NYCPlanning/fast-tracker-tool/issues/21))
- Added `Industrial Lots ID` value to Tax Lot pop-up. Had previously been missing. 
### Changed
- Updated various dataset aliases within web map (impacts legend, pop-up, and web map details page.) Updated to enhance internal naming consistency and accuracy.
- Updated all data sources within app to point to hosted views instead of pre-existing feature services (Addresses [#22](https://github.com/NYCPlanning/fast-tracker-tool/issues/22))
  - Also updated names of all views and underlying services to follow a consistent convention.
  - Performed in order to improve stability of datasets when undergoing regular data updates, and to improve internal naming consistency and discoverability.
- Updated settings on all source data to:
  - Protect from accidental deletion
  - Mark as authoritative sources
  - Allow users to export data to other formats
  - Extend cache timing to improve application performance
  - (See [#25](https://github.com/NYCPlanning/fast-tracker-tool/issues/25))
### Removed

## [v0.2.1] - 2024-06-06
- Update of survey and report data version information
### Added
### Fixed
- Added missing point features to Legend widget
### Changed
- Replaced dataset version table at end of report with a single data source version number in report header, and a corresponding contextual footnote
- Removed version number text in application header, and replaced it with a title text hyperlink to the application changelog
  - Allows re-publication of survey and report without having to fully re-publish the Experience Builder application
### Removed

## [v0.2.0] - 2024-06-03
- Broad beta release of Fast Tracker application
### Added
- Search by BBL functionality added to search widget on Lot Selector page
- Close with "X" button to Legend
- Point select tool from Select widget
- Layer control widget
### Fixed
- Hyperlink behavior within app sidebar - links will now open the PDF or web page in a new tab, and not within the sidebar itself
### Changed
- Incorporated various beta testing feedback into survey language
- Filtered CATS permit dataset to only include `ApplicationID` values prefixed with "PA" or "PB"
- Make all survey questions required, with the exception of questions covering personal identifiers such as Project ID and Company Name
- Added size adjustment functionality to data table widgets
- Changed map/data hierarchy within app and survey
  - Combined HazMat with Noise
  - Moved Natural, Historic, and Shadows to separate application views
- Output CSV name from `Tax Lots.csv` to `Fast Tracker Lots.csv`
- Behavior of Legend and Layer windows - windows now open in sidebar on left side of screen, not as windows anchored to button
### Removed
- Search widget from all maps besides the Lot Selector map
- Polygon select tool from Select widget

## [v0.1.0] - 2024-05-06
- Limited beta release of Fast Tracker application
### Added
### Fixed
### Changed
### Removed

----
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
