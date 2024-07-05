---
name: Data update template
about: High-level steps for GIS Team to update data in the Fast Tracker app
title: Update Fast Tracker Data
labels: GIS
assignees: jackrosacker

---

Data version: 
App version: 

- [ ] Pre-publish
  - [ ] Get confirmation from DE
  - [ ] Unzip new GDB to staging location
  - [ ] Re-source Pro workspace to new GDB
  - [ ] Visually check data:
    - [ ] All features have `variable_type` and `variable_id` columns
    - [ ] No major spatial anomalies (i.e. all features are buffered where relevant, points are excluded when joined to lots, etc.)
- [ ] Publish
  - [ ] [green_fast_track_bbls](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/ArcGIS/rest/services/green_fast_track_lots/FeatureServer)
  ##### Air Quality
  - [ ] [sources__arterial_highways](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/sources__arterial_highways/FeatureServer)
  - [ ] [arterial_highways_buffer_merge](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/arterial_highways_buffer_merge/FeatureServer)
  - [ ] [title_v_permit_locations](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/title_v_permit_locations/FeatureServer)
    - source__title_v_permit_lots
    - source__title_v_permit_points
  - [ ] [title_v_permits_buffer_merged](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/title_v_permits_buffer_merged/FeatureServer)
  - [ ] [state_facility_permit_locations](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/state_facility_permit_locations/FeatureServer)
    - source__state_facility_points
    - source__state_facility_lots
  - [ ] [state_facility_permits_buffer_merge](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/state_facility_permits_buffer_merge/FeatureServer)
  - [ ] [vent_structure_lots](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/vent_structure_lots/FeatureServer)
  - [ ] [vent_towers_buffered](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/vent_towers_buffered/FeatureServer)
  - [ ] [industrial_sources_lots](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/industrial_sources_lots/FeatureServer)
  - [ ] [industrial_sources_buffer](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/industrial_sources_buffer/FeatureServer)
  - [ ] [cats_permits_locations](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/cats_permits_locations/FeatureServer)
    - source__cats_permit_lots
    - source__cats_permit_points
  - [ ] [cats_permits_buffer_dissolve](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/cats_permits_buffer_dissolve/FeatureServer)
  ##### Noise
  - [ ] [airports](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/airports/FeatureServer)
  - [ ] [elevated_railways_buffer_merged](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/elevated_railways_buffer_merged/FeatureServer)
  ##### Natural Resources
  - [ ] [sources__state_freshwater_wetlands_checkzones](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/sources__state_freshwater_wetlands_checkzones/FeatureServer)
  - [ ] [gft_natural_resources](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/gft_natural_resources/FeatureServer)
    - source__natural_resources_lines
    - source__natural_resources_polys
  ##### Historic Resources
  - [ ] [gft_historic_resources_lots](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/gft_historic_resources_lots/FeatureServer)
  - [ ] [gft_historic_resources_points](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/gft_historic_resources_points/FeatureServer)
  - [ ] [gft_historic_districts](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/gft_historic_districts/FeatureServer)
  - [ ] [gft_historic_resources_buffer](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/gft_historic_resources_buffer/FeatureServer)
  - [ ] [sources__archaeological_areas](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/sources__archaeological_areas/FeatureServer)
  ##### Shadows
  - [ ] [sources__historic_resources_buffer_200ft](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/sources__historic_resources_buffer_200ft/FeatureServer)
  - [ ] [gft_shadow_open_spaces_buffer](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/gft_shadow_open_spaces_buffer/FeatureServer)
  - [ ] [gft_shadow_open_spaces_lots](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/gft_shadow_open_spaces_lots/FeatureServer)
  - [ ] [sources__natural_resources_buffer](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/sources__natural_resources_buffer/FeatureServer)
  - [ ] [gft_source_data_versions](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/gft_source_data_versions/FeatureServer)
- [ ] Post-publish
  - [ ] Confirm data appears in pop-ups
  - [ ] Confirm data appears in map
  - [ ] Confirm report + export to CSV both work
