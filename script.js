function initMap() {
	// Map options
	var options = {
		zoom: 12,
		center: {
			lat: 40.688264,
			lng: -73.956846
		}
	}

	// New map
	var map = new google.maps.Map(document.getElementById('map'), options);



	/*
	// Add marker
	var marker = new google.maps.Marker({
	  position:{lat:42.4668,lng:-70.9495},
	  map:map,
	  icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	});

	var infoWindow = new google.maps.InfoWindow({
	  content:'<h3>Lynn MA</h1>'
	});

	marker.addListener('click', function(){
	  infoWindow.open(map, marker);
	});
	*/

	// Array of markers
	var markers = [{
			coords: {
				lat: 40.722278,
				lng: -73.957630
			},
			content: '<h3><a href="http://outputclub.com/" target="_blank">Output</a></h1><p><img src="images/output.jpg" height="134" width="200"><br><br>74 Wythe Ave, Brooklyn, NY 11249<br><br></p>'
      },
		{
			coords: {
				lat: 42.8584,
				lng: -70.9300
			},
			content: '<h3><a href="http://www.alphavillebk.com/" target="_blank">Alphaville</a></h1><p><img src="images/alphaville.jpg" height="134" width="200"><br><br>140 Wilson Avenue Brooklyn, NY 11237</p>'
      },
		{
			coords: {
				lat: 40.700505,
				lng: -73.925680
			},
			content: '<h3><a href="http://www.alphavillebk.com/" target="_blank">Alphaville</a></h1><p><img src="images/alphaville.jpg" height="134" width="200"><br><br>140 Wilson Avenue Brooklyn, NY 11237</p>'
      },
		{
			coords: {
				lat: 40.709196,
				lng: -73.937504
			},
			content: '<h3><a href="http://theacheronbk.com" target="_blank">The Archeron</a></h1><p><img src="images/archeron.jpeg" height="134" width="200"><br><br>57 Waterbury Street Brooklyn, NY 11206</p>'
      },
		{
			coords: {
				lat: 40.710062,
				lng: -73.96348
			},
			content: '<h3><a href="http://babysallright.com/" target="_blank">Baby`s All Right</a></h1><p><img src="images/babysallright.jpg" height="134" width="200"><br><br>146 Broadway Brooklyn, NY 11211</p>'
      },
		{
			coords: {
				lat: 40.667619,
				lng: -73.983993
			},
			content: '<h3><a href="http://www.barbesbrooklyn.com/" target="_blank">Barbes</a></h1><p><img src="images/barbes.jpg" height="134" width="200"><br><br>376 9th St, Brooklyn, NY 11215</p>'
			},
		{
			coords: {
				lat: 40.698012,
				lng: -73.927796
			},
			content: '<h3><a href="http://bossanovacivicclub.com/" target="_blank">Bossanova Civic Club</a></h1><p><img src="images/bossanova.jpg" height="134" width="200"><br><br>1271 Myrtle Ave, Brooklyn, NY 11221</p>'
			},
		{
			coords: {
				lat: 40.730057,
				lng: -73.954832
			},
			content: '<h3><a href="https://bkbazaar.com/" target="_blank">Brooklyn Bazaar</a></h1><p><img src="images/bkbazaar.jpg" height="134" width="200"><br><br>150 Greenpoint Ave, Brooklyn, NY 11222</p>'
			},
		{
			coords: {
				lat: 40.688264,
				lng: -73.956846
			},
			content: '<h3><a href="http://www.cmoneverybody.com/" target="_blank">C`Mon Everybody</a></h1><p><img src="images/cmoneverybody.jpg" height="134" width="200"><br><br>325 Franklin Avenue Brooklyn, NY 11238</p>'
			},
		{
			coords: {
				lat: 40.709371,
				lng: -73.922965
			},
			content: '<h3><a href="https://www.elsewherebrooklyn.com/" target="_blank">Elsewhere</a></h1><p><img src="images/elsewhere.jpg" height="134" width="200"><br><br>599 Johnson Ave, Brooklyn, NY 11237</p>'
			},
		{
			coords: {
				lat: 40.693813,
				lng: -73.929931
			},
			content: '<h3><a href="http://www.flowersforalloccasions.org/" target="_blank">Flowers for All Occasions</a></h1><p><img src="images/flowers.jpg" height="134" width="200"><br><br>1114 Dekalb Ave, Brooklyn, NY 11221</p>'
			},
		{
			coords: {
				lat: 40.663420,
				lng: -73.991280
			},
			content: '<h3><a href="https://freddysbar.com/" target="_blank">Freddy`s Bar and Backroom</a></h1><p><img src="images/freddy.jpg" height="134" width="200"><br><br>627 5th Ave, Brooklyn, NY 11215</p>'
			},
		{
			coords: {
				lat: 40.678623,
				lng: -73.958574
			},
			content: '<h3><a href="http://www.fnlbk.com/" target="_blank">Friends and Lovers</a></h1><p><img src="images/friends.jpg" height="134" width="200"><br><br>641 Classon Avenue Brooklyn, NY 11238</p>'
			},
		{
			coords: {
				lat: 40.726831,
				lng: -73.952906
			},
			content: '<h3><a href="http://www.goodroombk.com/about/" target="_blank">The Good Room</a></h1><p><img src="images/goodroom.jpg" height="134" width="200"><br><br>98 Meserole Avenue Brooklyn, NY 11222</p>'
			},
		{
			coords: {
				lat: 40.681279,
				lng: -74.004312
			},
			content: '<h3><a href="http://jalopytheatre.org/" target="_blank">Jalopy Theater</a></h1><p><img src="images/jalopy.jpeg" height="134" width="200"><br><br>315 Columbia Street Brookyln, NY 11231</p>'
			},
		{
			coords: {
				lat: 40.694435,
				lng: -73.930523
			},
			content: '<h3><a href="https://www.yelp.com/biz/lone-wolf-brooklyn" target="_blank">Lone Wolf</a></h1><p><img src="images/lonewolf.jpg" height="134" width="200"><br><br>1089 Broadway, Brooklyn, NY 11221</p>'
			},
		{
			coords: {
				lat: 40.697069,
				lng: -73.934609
			},
			content: '<h3><a href="https://www.facebook.com/markethotel" target="_blank">Market Hotel</a></h1><p><img src="images/markethotel.jpg" height="134" width="200"><br><br>1140 Myrtle Ave, Brooklyn, NY 11221</p>'
			},
		{
			coords: {
				lat: 40.716451,
				lng: -73.952786
			},
			content: '<h3><a href="http://muchmoresnyc.com/" target="_blank">Muchmores</a></h1><p><img src="images/muchmores.jpg" height="134" width="200"><br><br>2 Havemeyer St, Brooklyn, NY 11211</p>'
			},
		{
			coords: {
				lat: 40.718896,
				lng: -73.961286
			},
			content: '<h3><a href="https://nationalsawdust.org/" target="_blank">National Sawdust</a></h1><p><img src="images/sawdust.jpg" height="134" width="200"><br><br>80 N 6th St, Brooklyn, NY 11249</p>'
			},
		{
			coords: {
				lat: 40.709403,
				lng: -73.933164
			},
			content: '<h3><a href="http://ourwickedlady.com/index.html" target="_blank">Our Wicked Lady</a></h1><p><img src="images/wicked.jpeg" height="134" width="200"><br><br>153 Morgan Avenue Brooklyn, NY 11237</p>'
			},
		{
			coords: {
				lat: 40.718103,
				lng: -73.950161
			},
			content: '<h3><a href="http://www.petescandystore.com/" target="_blank">Pete`s Candy Store</a></h1><p><img src="images/petes.jpg" height="134" width="200"><br><br>709 Lorimer St, Brooklyn, NY 11211</p>'
			},
		{
			coords: {
				lat: 40.736765,
				lng: -73.955160
			},
			content: '<h3><a href="https://www.saintvitusbar.com/" target="_blank">Saint Vitus</a></h1><p><img src="images/vitus.jpg" height="134" width="200"><br><br>1120 Manhattan Ave, Brooklyn, NY 11222</p>'
			},
		{
			coords: {
				lat: 40.692446,
				lng: -73.927448
			},
			content: '<h3><a href="https://www.secretprojectrobot.org/" target="_blank">Secret Project Robot</a></h1><p><img src="images/secretproject.jpg" height="134" width="200"><br><br>1186 Broadway, Brooklyn, NY 11221</p>'
			},
		{
			coords: {
				lat: 40.715848,
				lng: -73.962132
			},
			content: '<h3><a href="http://www.skinnydennisbar.com/" target="_blank">Skinny Dennis</a></h1><p><img src="images/skinnydennis.jpg" height="134" width="200"><br><br>152 Metropolitan Ave Brooklyn, NY 1221 </p>'
			},
		{
			coords: {
				lat: 40.675670,
				lng: -74.016922
			},
			content: '<h3><a href="http://www.sunnysredhook.com/" target="_blank">Sunny`s</a></h1><p><img src="images/sunnys.jpg" height="134" width="200"><br><br>253 Conover St, Brooklyn, NY 11231</p>'
			},
		{
			coords: {
				lat: 40.639695,
				lng: -73.967150
			},
			content: '<h3><a href="http://www.sycamorebrooklyn.com/" target="_blank">Sycamore Bar and Flower Shop </a></h1><p><img src="images/sycamore.jpg" height="134" width="200"><br><br>1118 Cortelyou Rd, Brooklyn, NY 11218</p>'
			},
		{
			coords: {
				lat: 40.673126,
				lng: -74.012229
			},
			content: '<h3><a href="https://rockysullivans.nyc/" target="_blank">Rocky O`Sullivan`s</a></h1><p><img src="images/sullivans.jpg" height="134" width="200"><br><br>46 Beard St, Brooklyn, NY 11231</p>'
			},
		{
			coords: {
				lat: 40.713705,
				lng: -73.934046
			},
			content: '<h3><a href="https://www.sunnyvalebk.com/" target="_blank">Sunnyvale</a></h1><p><img src="images/sunnyvale.jpg" height="134" width="200"><br><br>1031 Grand St, Brooklyn, NY 11211</p>'
			},
		{
			coords: {
				lat: 40.690976,
				lng: -73.924876
			},
			content: '<h3><a href="https://www.facebook.com/thegatewaybk/" target="_blank">The Gateway</a></h1><p><img src="images/gateway.jpg" height="134" width="200"><br><br>1272 Broadway, Brooklyn, NY 11221</p>'
			},
		{
			coords: {
				lat: 40.694106,
				lng: -73.930692
			},
			content: '<h3><a href="http://www.the-living-gallery.com/" target="_blank">The Living Gallery</a></h1><p><img src="images/livinggallery.jpg" height="134" width="200"><br><br>1094 Brooklyn, NY 11221</p>'
			},
		{
			coords: {
				lat: 40.676816,
				lng: -73.963461
			},
			content: '<h3><a href="https://www.thewaystationbk.com/" target="_blank">The Way Station</a></h1><p><img src="images/waystation.jpg" height="134" width="200"><br><br>683 Washington Ave. Brooklyn, NY 11238</p>'
			},
		{
			coords: {
				lat: 40.707031,
				lng: -73.947420
			},
			content: '<h3><a href="http://therosemontnyc.com/" target="_blank">The Rosemont</a></h1><p><img src="images/rosemont.jpg" height="134" width="200"><br><br>63 Montrose Ave, Brooklyn, NY 11206</p>'
			},
		{
			coords: {
				lat: 40.714973,
				lng: -73.951553
			},
			content: '<h3><a href="https://www.union-pool.com/" target="_blank">Union Pool</a></h1><p><img src="images/unionpool.jpg" height="134" width="200"><br><br>484 Union Ave Brooklyn, NY 11211</p>'
			},
		{
			coords: {
				lat: 40.676168,
				lng: -73.980093
			},
			content: '<h3><a href="https://www.unionhallny.com/" target="_blank">Union Hall</a></h1><p><img src="images/unionhall.jpg" height="134" width="200"><br><br>702 Union St, Brooklyn, NY 11215</p>'
			},
		{
			coords: {
				lat: 40.693761,
				lng: -73.929271
			},
			content: '<h3><a href="https://www.theglove.nyc/" target="_blank">The Glove</a></h1><p><img src="images/theglove.jpg" height="134" width="200"><br><br>1117 Broadway, Brooklyn, NY 11221</p>'
		},
	];

	// Loop through markers
	for (var i = 0; i < markers.length; i++) {
		// Add marker
		addMarker(markers[i]);
	}

	// Add Marker Function
	function addMarker(props) {
		var marker = new google.maps.Marker({
			position: props.coords,
			map: map,
			//icon:props.iconImage
		});

		// Check for customicon
		if (props.iconImage) {
			// Set icon image
			marker.setIcon(props.iconImage);
		}

		// Check content
		if (props.content) {
			var infoWindow = new google.maps.InfoWindow({
				content: props.content
			});

			marker.addListener('click', function () {
				infoWindow.open(map, marker);
			});
		}
	}
}