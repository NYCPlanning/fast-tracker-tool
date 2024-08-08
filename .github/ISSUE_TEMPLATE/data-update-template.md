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
  - [ ] [GFT_Green_Fast_Track_Lots](https://dcp.maps.arcgis.com/home/item.html?id=08d1a0918aa04b5f9a3f7bde992a2dbd)
    - Green_Fast_Track_Lots
  ##### Air Quality
  - [ ] [GFT_Arterial_Highways](https://dcp.maps.arcgis.com/home/item.html?id=e1256c00c4eb4869bcdae67bcf4c5c95)
    - Arterial_Highways
    - Arterial_Highways_Buffer
  - [ ] [GFT_Title_V_Permits](https://dcp.maps.arcgis.com/home/item.html?id=d535fbd441574dd78a03ca7b2f368237)
    - Title_V_Permits_Lots
    - Title_V_Permits_Points
    - Title_V_Permits_Buffer
  - [ ] [GFT_State_Facility_Permits](https://dcp.maps.arcgis.com/home/item.html?id=682dddd5532f45f3bb4fea453c1d5024)
    - State_Facility_Permits_Lots
    - State_Facility_Permits_Points
    - State_Facility_Permits_Buffer
  - [ ] [GFT_Vent_Structures](https://dcp.maps.arcgis.com/home/item.html?id=0bd9e4f6d3a44ee4b414643122d595ce)
    - Vent_Structures
    - Vent_Structures_Buffer
  - [ ] [GFT_Industrial_Sources](https://dcp.maps.arcgis.com/home/item.html?id=ccd743131fa14fbbb9d9ee7b810f8597)
    - Industrial_Sources_Lots
    - Industrial_Sources_Buffer
  - [ ] [GFT_CATS_Permits](https://dcp.maps.arcgis.com/home/item.html?id=986e2fbcb7754393a1b5785d2d855936)
    - CATS_Permits_Lots
    - CATS_Permits_Points
    - CATS_Permits_Buffer
  ##### Noise
  - [ ] [GFT_Airport_Noise_Exposure](https://dcp.maps.arcgis.com/home/item.html?id=d9c78a257f1040fbbb949d0c7041629c)
    - Airport_Noise_Exposure
  - [ ] [GFT_Exposed_Railway](https://dcp.maps.arcgis.com/home/item.html?id=b2c4a16f63fb4dd3ac4e30efc7963e64)
    - Exposed_Railway
    - Exposed_Railway_Buffer
  ##### Natural / Historic / Shadows
  - [ ] [GFT_Wetland_Check_Zones](https://dcp.maps.arcgis.com/home/item.html?id=c79b1eb3413047f7a8e46fe4e3ba97a1)
    - Wetland_Check_Zones
  - [ ] [GFT_Natural_Resources_TEMP](https://dcp.maps.arcgis.com/home/item.html?id=872ebe0811644c2ca45f32bd4fb46a33) [2024-08-08 Note: this is a temporary service that will be replaced shortly]
    - Natural_Resources_Poly
    - Natural_Resources_Lines
    - Natural_Resources_Shadow_Buffer
  - [ ] [GFT_Historic_Resources](https://dcp.maps.arcgis.com/home/item.html?id=6d8f93de48cb4d4baabec65ee791731d)
    - Historic_Resources_Lots
    - Historic_Resources_Points
    - Historic_Resources_Buffer
    - Historic_Resources_Shadow_Buffer
  - [ ] [GFT_Historic_Districts](https://dcp.maps.arcgis.com/home/item.html?id=301c830ceb5a4738acf81536a50cac78)
    - Historic_Districts
  - [ ] [GFT_Archaeological_Areas](https://dcp.maps.arcgis.com/home/item.html?id=4bee00516cc840efa831e09feb03fdfc)
    - Archaeological_Areas
  - [ ] [GFT_Open_Spaces](https://dcp.maps.arcgis.com/home/item.html?id=8c4073dba97d4d3d947be9a838ef915d)
    - Open_Spaces
    - Open_Spaces_Shadow_Buffer
  - [ ] [GFT_Source_Data_Versions](https://dcp.maps.arcgis.com/home/item.html?id=af3af7cb490e4067adb073333c9640a3)
    - Source_Data_Versions
  ##### Application *(only requires updates as needed)*
  - [ ] [GFT_User_Guide_Items](https://dcp.maps.arcgis.com/home/item.html?id=82f352439c194b4094a05b6a7e74234f)
    - User_Guide_Items

- [ ] Post-publish
  - [ ] Confirm data appears in pop-ups
  - [ ] Confirm data appears in map
  - [ ] Confirm report + export to CSV both work
