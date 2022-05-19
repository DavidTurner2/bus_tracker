let locations = [0, 0];
  //mapboxgl.accessToken = 'pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg';
  mapboxgl.accessToken = "pk.eyJ1IjoiZGF2aWR0dXJuZXIyIiwiYSI6ImNsMno5NnVnYjAxbm4zYnIxdnA1aDVhMnYifQ.vgxl0jRxqyJ9HIKLENTQpQ";
 
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.104081, 42.365554],
      zoom: 14
  });
 
var marker = new mapboxgl.Marker()
    .setLngLat([-71.092761, 42.357575])
    .addTo(map);

 const busStops = [];
//     [-71.093729, 42.359244], 
//     [-71.094915, 42.360175],
//     [-71.095800, 42.360698],
//     [-71.099558, 42.362953],
//     [-71.103476, 42.365248],
//     [-71.106067, 42.366806],
//     [-71.108717, 42.368355],
//     [-71.110799, 42.369192],
//     [-71.113095, 42.370218],
//     [-71.115476, 42.372085],
//     [-71.117585, 42.373016],
//     [-71.118625, 42.374863]
// ];

//let counter = 0;
function move(){
  setTimeout(()=>{
   // if (counter >= busStops.length) return;
   console.log([locations[0].attributes.longitude, locations[0].attributes.latitude]);

    marker.setLngLat([locations[0].attributes.longitude, locations[0].attributes.latitude]);



    map.flyTo({
center: [locations[0].attributes.longitude, locations[0].attributes.latitude ],
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});












    //counter++;
    move();
  },1000); 
}




run();

async function run(){
    // get bus data    
	locations = await getBusLocations();
	//console.log(new Date());
	console.log(locations);
  //return [locations[0].attributes.longitude, locations[0].attributes.latitude];
	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?api_key=8d9254befc5548459b4983a083620863&filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}








