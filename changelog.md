# Changelog
## Fast Tracker Application

All notable changes to this project will be documented in this file.

## [v1.0.0] - 2024-12-17
- Overhaul the report generation + delivery automation
- Rebuild the zoning overlay symbology grouping mechanism
- Add a dynamic data version value to the app
### Added
- A dynamic data version string to the information dropdown in the header of the main application screen AND a supplementary link to the application changelog (this page) in lieu of adding a dynamic _application_ version string. This second problem is much harder and is still unsolved.
  - To help demystify what data is being used to hydrate the app and provide eligibility determinations, we wanted to dynamically provide a data version number somewhere within the app, without requiring a user to dig through supplementary datasets, or export their CSV
  - The dynamic text we added queries the [Source Data Versions view](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/ArcGIS/rest/services/v_GFT_Source_Data_Versions/FeatureServer), and returns the value of the version of PLUTO used to built this version of the GFT tax lot dataset
    (Addresses [#35](https://github.com/NYCPlanning/fast-tracker-tool/issues/35)
### Fixed
- The zoning overlay symbology to dynamically assign symbology based on the ruleset governing what is symbolized as high and low density residential, commercial or manufacturing, and so on. Addresses [#30](https://github.com/NYCPlanning/fast-tracker-tool/issues/30)
  - The symbology previously relied on a manual grouping of zoning districts. This began to show errors as zoning districts changed, and as new zoning district groups were added to the dataset.
- Survey feature service record deletion bug. The ArcGIS token was expiring, blocking record deletion from occurring when a new report was generated. Addresses [#33](https://github.com/NYCPlanning/fast-tracker-tool/issues/33)
  - Work done to resolve [#28](https://github.com/NYCPlanning/fast-tracker-tool/issues/28) appears to have fixed this issue as well.
  - The ArcGIS Power Automate token has a 14 day timeout if not used. Due to the work done to rebuild the report generation and delivery automation, and to adapt the scheduled keep-awake automation to interact with the ArcGIS connection specifically, it should now be much harder for the token to expire. 
### Changed
- The back report generation and delivery automation, and supplementary keep-awake and notify automation, both built with Power Automate
  - Rebuilt the report generation/delivery automation to use the ArcGIS connection, and not the Survey123 connection as previously used. The ArcGIS connection token can still expire if left unused for around 14 days, but it will allegedly remain active if used within that time period
  - Rebuilt the keep-awake and notify to interact with the ArcGIS connection daily to keep it active even if no reports are being generated, and to send the results of that action to the GIS Team to maintain proactive awareness of Power Automate connection health.
  - Addresses [#28](https://github.com/NYCPlanning/fast-tracker-tool/issues/28)

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
