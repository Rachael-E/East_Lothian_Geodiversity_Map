// Initialize MongoDB database
use mapdata;
db.dropDatabase();
// Initialize Mongo collection
// Add in castle objects for seeding the database

db.mapDataInfo.insertMany([
  {
    "name": "Gala Law",
    "description": "The site is a small quarry situated on the eastern slope of Gala Law, located at the northern edge of the Lammermuir Hills, 11km south of Haddington, and 2km north-east of Lammer Law. The quarry exposes a sequence of greywackes, silstones, mydstones and shales belonging to the Gala Group of Silurian Age.",
    "features": "Lower Palaeozoic rocks, fossils ",
    "latlng": [55.861072,	-2.7427626]
  },
  {
    "name": "Burn Hope",
    "description": "The site is situated 9 km south-east of Dunbar, within an upland area comprising the north-eastern margin of the Lammermuir Hills, 4 km west of the small hamlet of Oldhamstocks. Burn Hope lies immediately to the west of the Aikengall Windfarm. The site itself is a ~450 m long section along a narrow stream gorge, centred around ‘Fairy Castle’ and is known locally as ‘Fairy Glen’. Low cliffs along this scenic gorge expose conglomerates and sandstones of the Lower Devonian Great Conglomerate Formation. ",
    "features": "Lower Devonian sedimentary rocks, fluvial geomorphology ",
    "latlng": [55.921705, -2.4799303]
  },
  {
    "name": "Gala Law",
    "description": "The site is a small quarry situated on the eastern slope of Gala Law, located at the northern edge of the Lammermuir Hills, 11km south of Haddington, and 2km north-east of Lammer Law. The quarry exposes a sequence of greywackes, silstones, mydstones and shales belonging to the Gala Group of Silurian Age.",
    "features": "Lower Palaeozoic rocks, fossils ",
    "latlng": [55.861072,	-2.7427626]
  },
  {
    "name": "Gin Head (Tantallon)",
    "description": "Gin Head is a rocky peninsula c. 300 m to the north-west of Tantallon Castle. The rocks exposed in the rock platform at the base of the cliffs are of primary interest: however, access to the site is difficult and dependent on the tides. Fossils, including the jawbone of a Lower Carboniferous tetrapod, ostracods, lungfish toothplates and wood, have been found historically at the site, making it extremely important for understanding Lower Carboniferous fauna. ",
    "features": "Lower Carboniferous palaeontology ",
    "latlng": [56.059097,	-2.6529135]
  },
  {
    "name": "Dunbar Shore",
    "description": "3 to 4 km section of coastline, located to the west, north and east of the town of Dunbar. The site displays a variety of upper Devonian and lower Carboniferous geological strata, structures and intrusions, and coastal geomorphological features. There are also geological links to the social and economic history of the town and the built heritage. ",
    "features": "Carboniferous intrusive igneous and sedimentary rocks (Ballagan Formation), coastal geomorphology ",
    "latlng": [56.005571,	-2.513122]
  },
  {
    "name": "North Berwick Shore",
    "description": "The site spans a 2 km section of coastline at North Berwick, extending from Partan Craig in the east, to the North Berwick Bay west. Cliff and coastal platform sections along the coast at the site expose dominantly volcanic and some sedimentary strata of Lower Carboniferous age. ",
    "features": "Carboniferous volcanic rocks (Garleton Hills Volcanic Formation), coastal geomorphology ",
    "latlng": [56.060053	-2.7077382]
  },
  {
    "name": "Yellow Craigs Shore",
    "description": "The site comprises a 3km section of coastline to the west of North Berwick, extending from the Yellow Craig Plantation up to Longskelly Point in the east, to the beach south of Eyebroughy in the west. The site displays strata of the Strathclyde Group, of Lower Carboniferous age. Younger strata of the Gullane Formation are exposed in the west and are underlain by older volcanic rocks of the Garleton Hills Volcanic Formation. ",
    "features": "Carboniferous volcanic rocks (Garleton Hills Volcanic Formation) ",
    "latlng": [56.064838,	-2.792579]
  },
  {
    "name": "Old Markle Quarry ",
    "description": "Disused basalt quarry, located ~0.5 km west of the village of East Linton. The site displays the type locality of the ‘Markle Basalt Lava’, which is of widespread occurrence in the lower Carboniferous lavas of the Midland Valley. The basalt forms part of the Garleton Hills Volcanic Formation, part of the Strathclyde Group of the lower Carboniferous. Historically, the quarry was worked at least until 1854, and closed sometime before 1895. ",
    "features": "Carboniferous volcanic rocks (Garleton Hills Volcanic Formation) ",
    "latlng": [55.984251,	-2.6685441]
  },
  {
    "name": "Blaikie Heugh, Balfour Monument ",
    "description": "The Balfour Monument sited on the 15m high lava escarpment of Blaikie Heugh offers stunning views of Traprain Law, Berwick Law and the Garleton Hills (Photo ELC_8 P1). The site is approximately 2.5km north-east of the village of Garvald. The site displays the “Craiglockhart Basalt Lava” belonging to the Garleton Hills Volcanic Formation. To the east of this site, a smaller escarpment exposes a hornblende-bearing trachybasaltic lava flow. ",
    "features": "Carboniferous volcanic rocks (Garleton Hills Volcanic Formation), landscape ",
    "latlng": [55.948598,	-2.6800029]
  },
  {
    "name": "Kippielaw ",
    "description": "Kippielaw Scarp is situated 1.5 km south-west of the village of East Linton and approximately 800 metres to the north of Traprain Law. The outcrop at Kippielaw Farm is a basaltic lava flow of “Dunsapie” type basalt as described by MacGregor (1928). The Dunsapie basalt type is a macroporphyritic basalt composed of plagioclase, olivine and clinopyroxene phenocrysts, and forms part of the Garleton Hills Volcanic Formation. ",
    "features": "Carboniferous volcanic rocks (Garleton Hills Volcanic Formation) ",
    "latlng": [55.970854,	-2.6685052]
  },
  {
    "name": "Dirleton Castle ",
    "description": "Dirleton Castle is located within the village of Dirleton and is perched on a porphyritic trachyte crag within the grounds. The igneous rock is part of the Garleton Hills Volcanic Formation and was extruded as lava during the Carboniferous age. The ruined castle dates back to the late 13th Century and underwent three phases of building. Due to its elevated position it was ideal for defensive purposes from land and sea. ",
    "features": "Carboniferous volcanic rocks (Garleton Hills Volcanic Formation), historical association ",
    "latlng": [56.037014	-2.7780937]
  },
  {
    "name": "Craigs Quarry ",
    "description": "Craigs Quarry (infilled since the 1970’s) is located to the west of the village of Dirleton, situated off the A198. The site is now known as Craigs Plantation and is used by an archery club. The plantation contains small out crops of porphyritic trachyte, belonging to the Garleton Hills Volcanic Formation and of Carboniferous age. ",
    "features": "Carboniferous volcanic rocks (Garleton Hills Volcanic Formation) ",
    "latlng": [56.042345	-2.7904644]
  },
  {
    "name": "Peppercraig Quarry ",
    "description": "The site comprises a small quarry located immediately north of the town of Haddington. The igneous rock of Carboniferous age extracted from the site was reportedly used to construct many of Haddington’s stone buildings. Now largely infilled, the quarry contains a small industrial park but exposures of the porphyritic trachyte remain in the back walls. ",
    "features": "Carboniferous volcanic rocks (Garleton Hills Volcanic Formation), historical association ",
    "latlng": [55.960982,	-2.7896377]
  },
  {
    "name": "Gullane Shore ",
    "description": "The site comprises a 1.5 km section of coastline located to the west of the town of Gullane between Gullane Point and Bleaching Rocks. Cliff and coastal platform sections along the coast at the site expose sedimentary strata of the Dinantian age (early Carboniferous) Gullane Formation and younger intrusive igneous rocks. ",
    "features": "Carboniferous sedimentary rocks (Gullane Formation), coastal geomorphology ",
    "latlng": [56.037737	-2.858774]
  },
  {
    "name": "Kilspindie Shore and Aberlady Point ",
    "description": "The site comprises a 2.2 km section of coastline located to the north-west of the town of Aberlady between Aberlady Point and Green Craig. This coastal section exposes the boundary between the Clackmannan Group and the Strathclyde Group of the Dinantian age (early Carboniferous). Limestones from both groups are exposed along this coastal section. The Gosford Sill, a younger intrusive igneous rock is also exposed at the western section of the site. ",
    "features": "Carboniferous sedimentary rocks (Aberlady and Lower Limestone formations), coastal geomorphology ",
    "latlng": [56.011569,	-2.8883945]
  },
  {
    "name": "Prestonpans Shore ",
    "description": "The site comprises a 2.6km section of coastline at the town of Prestonpans. The site displays strata from the Upper Carboniferous, increasing in age from west to east. The important stratigraphic horizon of the Index Limestone, is seen at the site. ",
    "features": "Upper Carboniferous sedimentary rocks (Limestone Coal and Upper Limestone formations) ",
    "latlng": [55.957781,	-2.9935772]
  },
  {
    "name": "Cockenzie to Port Seton Shore ",
    "description": "Cockenzie and Port Seton are located approximately 9 kilometres east of Edinburgh. The 1.7 kilometre long site displays sedimentary strata from of the Carboniferous age Upper Limestone, Passage and Lower Coal Measures formations, which are locally intruded by dykes. The Crossgatehall Fault trends south-west to north-east through the site. This site is the only known natural exposure of the Lower Coal Measures Formation in East Lothian. ",
    "features": "Upper Carboniferous sedimentary rocks (Upper Limestone, Passage and Lower Coal Measures formations) ",
    "latlng": [55.97269,	-2.9568822]
  },
  {
    "name": "Esk Valley ",
    "description": "The site comprises a 1 kilometre stretch of gorge along the River Esk near the village of Smeaton. The section extends from Smeaton Bridge in the north to the confluence of the River North Esk and River South Esk, at the ‘Meeting of the Waters’ to the south. The site displays strata from the Middle Coal Measures Formation of the Upper Carboniferous. ",
    "features": "Middle Coal Measures Formation",
    "latlng": [55.913204,	-3.054143]
  },
  {
    "name": "Pencraig Quarry ",
    "description": "The site comprises a disused quarry to the south-east of Pencraig Wood, approximately 2 km to the west of the village of East Linton. The quarry exposes a non-porphyritic intrusive trachyte sill. The car park and view point to the east and north of the quarry respectively have excellent views out across East Lothian. ",
    "features": "Intrusive igneous rocks",
    "latlng": [55.979895,	-2.686081]
  },
  {
    "name": "North Berwick Law ",
    "description": "Located on the southern outskirts of North Berwick, North Berwick Law is a fine example of a crag and tail landform shaped by differential glacial erosion of a phonolitic trachyte plug. It forms a distinctive and characteristic landmark in East Lothian. ",
    "features": "Geomorphology and Carboniferous plugs",
    "latlng": [56.048932,	-2.7104082]
  },
  {
    "name": "Kidlaw Quarry ",
    "description": "The site comprises a disused quarry just to the north-west of Kidlaw Farm, 5 km south-west of Gifford. The site exposes basanite, an extrusive basaltic rock composed chiefly of plagioclase, olivine and augite. The Kidlaw Plug belongs to the Scottish Carboniferous to Early Permian Plugs and Vents Suite. ",
    "features": "Intrusive igneous rocks",
    "latlng": [55.869532,	-2.7895543]
  },
  {
    "name": "Cheese Bay ",
    "description": "Cheese Bay is a small, 70 m wide bay, situated 2.5 km to the north-west of Dirleton. The site is well known within the geological community for its palaeontological links. Historically, a wealth of fossilised shrimp, fish and other fossils from the Carboniferous were found in situ here. Today there is little left of the fossiliferous bed in situ, due to erosion and vandalism, but fossiliferous pebbles can be found on the adjacent beach. ",
    "features": "Carboniferous palaeontology",
    "latlng": [56.061294,	-2.8167079]
  },
  {
    "name": "Garleton Hills ",
    "description": "The Garleton Hills form a distinctive area of ice-moulded volcanic hills located 2.5 km north of Haddington. ",
    "features": "Glacial landforms",
    "latlng": [55.977121,	-2.7864892]
  },
  {
    "name": "Kidlaw Erratic ",
    "description": "The site comprises a glacially transported mass of limestone located north of Kidlaw Farm, 5 km south west of Gifford; this is the largest known glacial erratic in Scotland. ",
    "features": "Glacial deposit and landforms",
    "latlng": [55.872095,	-2.7850197]
  },
  {
    "name": "Lochhouses ",
    "description": "The site comprises a peat-filled depression in a gully system north of Lochhouses, 1.5km north-east of Whitekirk, that contains sedimentary evidence for a tsunami associated with the Holocene Storegga Slide that occurred offshore south-west Norway around 8110 years ago. It is an important dated reference site for this event in south-east Scotland. ",
    "features": "Coastal deposits",
    "latlng": [56.030916,	-2.6207294]
  },
  {
    "name": "Seacliff, Scoughall Shore ",
    "description": "The site comprises an ~3 km stretch of coast 5 km east of North Berwick with importance for the study of modern processes of shore platform development by storm wave action and weathering. ",
    "features": "Coastal landforms",
    "latlng": [56.047868,	-2.6195408]
  },
  {
    "name": "Thorntonloch ",
    "description": "The site comprises a 1 km stretch of coast 1 km south-east of Thorntonloch, including the intertidal shore platform and backing cliff. Good examples of natural arches are found in the more resistant sandstone headlands in the cliffs and the shore platform displays excellent 'karst-like' weathering features in calcareous sandstone. ",
    "features": "Coastal landforms (sandstone)",
    "latlng": [55.951413,	-2.3841367]
  },
  {
    "name": "Whitekirk",
    "description": "The site comprises an area of streamlined bedrock characteristic of the ice-moulded lowlands of East Lothian. ",
    "features": "Glacial landforms",
    "latlng": [56.020214,	-2.6724381]
  },
  {
    "name": "Tyne Estuary & Belhaven Bay",
    "description": "The Tyne Estuary & Belhaven Bay site is notable for a varied assemblage of dynamic coastal landforms located west of Dunbar. The main features are sand spits, intertidal sand flats, sand dunes, salt marshes, shore platforms, raised shorelines and a tsunami deposit. ",
    "features": "Coastal landforms",
    "latlng": [56.009712,	-2.5723882]
  },
  {
    "name": "Gullane Bents",
    "description": "Gullane Bents is a 2km long stretch of sand dunes and beach located to the west of the town. It is of geomorphological interest as an applied case study of sand dune restoration following extensive disturbance. ",
    "features": "Coastal dune system",
    "latlng": [56.042479,	-2.8368725]
  },
  {
    "name": "Aberlady Bay",
    "description": "Aberlady Bay comprises a varied assemblage of coastal landforms located north of the village of Aberlady. It includes sand dunes, salt marsh, extensive intertidal flats, an active sand spit and raised shorelines. ",
    "features": "Coastal landforms",
    "latlng": [56.021213,	-2.8678083]
  }
]);
