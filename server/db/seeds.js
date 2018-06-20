// Initialize MongoDB database
use mapdata;
db.dropDatabase();
// Initialize Mongo collection
// Add in castle objects for seeding the database

db.mapDataInfo.insertMany([
  {
    "name": "Hailes Castle",
    "ruined": true,
    "description": "Hailes Castle is a mainly 14th century castle near East Linton, East Lothian, and associated with the Wars of Independence and Mary Queen of Scots. It is situated on the River Tyne and features a chapel, vaulted basement bakehouse, brewhouse and several towers.",
    "price": "Free",
    "trivia": ["The 14th century tower was used as a dovecot after it ceased to be occupied.", "It is one of Scotland's oldest stone castles, dating from the early 1200s."],
    "latlng": [55.97239, -2.68412]
  },
  {
    "name": "Caerlaverock Castle",
    "ruined": true,
    "description": "This castle is of moated triangular construction, first built in the 13th century. Three lengths of defensive curtain wall are linked at their three angles by high corner towers. On the north side is an impressive twin-towered gatehouse.",
    "price": "6.00",
    "trivia": ["The castle was the filming location for the 2011 movie The Decoy Bride.", "It is unique to Britain as the only triangular castle." ],
    "latlng": [54.9756, -3.5240]
  },
  {
    "name": "Stirling Castle",
    "ruined": false,
    "description": "ST is one of the largest and most important castles in Scotland, both historically and architecturally. Most of the principal buildings of the castle date from the fifteenth and sixteenth centuries. A few structures of the fourteenth century remain, while the outer defences fronting the town date from the early eighteenth century.",
    "price": "15.00",
    "trivia": ["James VI grew up within the walls of Stirling Castle and his first child, Henry was born there in 1594.", "James II lured the 8th Earl of Douglas to it in 1452, murdered him, and had his body tossed out of one of the windows, despite promising safe conduct."],
    "latlng": [56.123982, -3.947428]
  },
  {
    "name": "Lochranza Castle",
    "ruined": true,
    "description": "This 16th century tower house can be found sitting on the shores of Loch Ranza on the Isle of Arran.",
    "price": "Free",
    "trivia": ["Lochranza Castle was the model for the castle in the Tintin comic The Black Island",  "In 1614 it was occupied by James VI and in the 1650s it was used by Oliver Cromwell"],
    "latlng": [55.706083, -5.291009]
  },
  {
    "name": "Glamis Castle",
    "ruined": false,
    "description": "Glamis is situated beside the village of Glamis in Angus. It is the home of the Earl of Strathmore. Glamis Castle has been the home of the Lyon family since the 14th century, though the present building dates largely from the 17th century.",
    "price": "12.50",
    "trivia": ["Glamis was the childhood home of The Queen Mother", "Princess Margaret the Queen's sister was born there."],
    "latlng": [56.620665, -3.001542]
  },
  {
    "name": "Blackness Castle" ,
    "ruined": true,
    "description": "Blackness Castle is a 15th-century fortress, near the village of Blackness, Scotland, on the south shore of the Firth of Forth. Built in the 15th century and massively strengthened in the 16th century as an artillery fortress, Blackness Castle has been a royal castle, prison, and armaments depot throughout its history",
    "price": "6.00",
    "trivia": ["Blackness Castle provides the setting for the Fort William headquarters of Black Jack Randall, and other scenes in the popular series Outlander.", "The impressive fortress has also featured in Hamlet and the BBC's Ivanhoe.", "Blackness Castle is often referred to as 'the ship that never sailed' due to its great stone ship appearance."],
    "latlng": [56.0060, -3.5162]
  },
  {
    "name": "Doune Castle" ,
    "ruined": true,
    "description": "Doune Castle is a medieval stronghold near the village of Doune, in the Stirling district of central Scotland. The formidable Doune Castle was built for the Regent Albany. The striking keep-gatehouse combines domestic quarters including the splendid Lord's Hall with its carved oak screen, musicians' gallery and double fireplace. It is also a popular filming location.",
    "price": "6.00",
    "trivia": ["Doune Castle featured heavily in Monty Python and the Holy Grail, with a number of its infamous scenes filmed in the Great Hall, courtyard, kitchen tower, and from the exterior walls.", "Doune's great hall impresses most. The cathedral-like room has a minstrels' gallery and a distinctive central hearth.", "Fans of the Game of Thrones will recognise Doune Castle as the fortress of Winterfell in the pilot of the popular fantasy series.", "The filming of the fictional Castle Leoch in the Outlander Series took place at Doune Castle."  ],
    "latlng": [56.1852, -4.0499]
  },
  {
    "name": "Dunnottar Castle" ,
    "ruined": true,
    "description": "Dunnottar castle is a ruined medieval fortress located upon a rocky headland on the north-east coast of Scotland, about 3km south of Stonehaven. The ruins are spread over 1.4 hectares, surrounded by steep cliffs that drop to the North Sea, 50m below.",
    "price": "7.00",
    "trivia": ["In the 9th century King Donald II of Scotland was killed at Dunnottar when it was invaded by Viking forces.", "Hamlet 1990 staring Mel Gibson was filmed here as well as more recently Victor Frankenstein 2015 starring James McAvoy and Daniel RadCliffe", ],
    "latlng": [56.945981, -2.197244]
  },
  {
    "name": "Eilean Donan Castle",
    "ruined": false,
    "description": "The castle was founded in the thirteenth century, and became a stronghold of the Clan Mackenzie and their allies the Clan Macrae. In the early eighteenth century, the Mackenzie's involvement in the Jacobite rebellions led in 1719 to the castle's destruction by government ships. Lieutenant-Colonel John Macrae-Gilstrap's twentieth-century reconstruction of the ruins produced the present buildings.",
    "price": "7.50",
    "trivia": ["It's believed that Robert the Bruce took refuge in Eilean Donan Castle (while being hunted by the British) during the 14th century.", "This Scottish castle has appeared in many popular movies over the years including - The Master of Ballantrae (with Errol Flynn in the 1950s); Elizabeth: The Golden Age (with Cate Blanchett in 2007); Highlander (with Sean Connery in 1984); Loch Ness (with Ted Danson in 1995); 'The World is Not Enough' (with Pierce Brosnan as James Bond in 1999)"],
    "latlng": [57.274073, -5.516148]
  },
  {
    "name": "Edinburgh Castle",
    "ruined": false,
    "description": "Edinburgh Castle is a historic fortress which dominates the skyline of the city of Edinburgh, Scotland, from its position on the Castle Rock in the heart of the city.",
    "price": "18.50",
    "trivia": ["Research undertaken in 2014 identified 26 sieges in its 1100-year-old history, giving it a claim to having been the most besieged place in Great Britain and one of the most attacked in the world.", "Edinburgh Castle is the most popular paid visitor attraction in Scotland.", "The One O'Clock Gun is fired every day at precisely 13:00, excepting Sunday, Good Friday and Christmas Day. The 'Time Gun' was established in 1861 as a time signal for ships in the harbour of Leith."],
    "latlng": [55.948611, -3.200833]
  }
]);
