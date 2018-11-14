# Google Maps

The Google Maps component displays an interactive, searchable map.

## Actual PropTypes

### ***NOTE: Storybook is not displaying the proptypes or JSX for our component.  See below, do not use the examples under "Show Info" above.

### containerElement: element | required
The main container element to put all of the sub-elements 


### initialPosition: object | not required | defaults to Nova campus
The initial position where the marker will be when the map first loads


### mapElement: element | required
The element to the actual map component 


### onMarkerChange: function | required 
The function to execute when the user changes the location of the marker on the map


### showCoords: boolean | not required
Shows an text input above the map with the longitude and latitude of the marker.  Set false to hide


## Actual Example Component JSX
```
	<GoogleMap
		initialPosition={{lng: -80.112369, lat: 26.054142}}
		onMarkerChange={() => { console.log('The function to be called when the marker on the map changes') }}
		containerElement={<div className="map-container" />}
		mapElement={<div className="map-element" />}
		showCoords
	/>
```