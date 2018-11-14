import React from 'react';
import propTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import SearchBox from 'react-google-maps/lib/components/places/SearchBox';

class GoogleMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: this.props.initialPosition || {
        lat: 26.078949,
        lng: -80.246286,
      },
      marker: this.props.initialPosition,
    };
    this.searchBox = React.createRef();
    this.googleMap = React.createRef();
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick(e) {
    this.setState({ marker: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
    this.props.onMarkerChange({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  }

  onPlacesChanged() {
    const places = this.searchBox.current.getPlaces();
    const bounds = new window.google.maps.LatLngBounds();

    places.forEach((place) => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    const nextMarkers = places.map((place) => ({
      position: place.geometry.location,
    }));
    const nextCenter = (nextMarkers[0] ? nextMarkers[0].position : this.state.center);
    this.setState({
      center: nextCenter,
      marker: { lat: nextCenter.lat(), lng: nextCenter.lng() },
    });
    this.props.onMarkerChange({ lat: nextCenter.lat(), lng: nextCenter.lng() });
  }

  render() {
    return (
      <div>
        {this.props.showCoords &&
          <div className="display-coordinates">
            <i className="fa fa-map-marker"></i>
            {this.state.marker &&
              <span>
                Longitude: <span>{Math.round(this.state.marker.lng * 1000000, 0) / 1000000}</span>, &nbsp;
                Latitude: <span>{Math.round(this.state.marker.lat * 1000000, 0) / 1000000}</span>
              </span>
            }
          </div>
        }
        <div>
          <GoogleMap
            ref={this.googleMap}
            defaultZoom={15}
            center={this.state.center}
            onClick={this.onMapClick}
          >
            {this.state.marker &&
              <Marker
                draggable
                onDragEnd={this.onMapClick}
                position={this.state.marker}
              />
            }
            <SearchBox
              ref={this.searchBox}
              controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
              onPlacesChanged={this.onPlacesChanged}
            >
              <input
                type="text"
                placeholder="Search for location"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') { e.preventDefault(); }
                }}
                style={{
                  boxSizing: 'border-box',
                  border: '1px solid transparent',
                  width: '240px',
                  height: '32px',
                  margin: '10px 0px',
                  padding: '0 12px',
                  borderRadius: '3px',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                  fontSize: '14px',
                  outline: 'none',
                  textOverflow: 'ellipses',
                }}
              />
            </SearchBox>
          </GoogleMap>
        </div>
      </div>
    );
  }
}

GoogleMapComponent.propTypes = {
  /** The main container element to put all of the sub-elements */
  /* eslint-disable */
  containerElement: propTypes.element.isRequired,
  /** The initial position where the point will be when the map first loads.  Defaults to Nova Campus */
  initialPosition: propTypes.object,
  /** The element to the actual map component */
  mapElement: propTypes.element.isRequired,
  /** The function to execute when the user changes the location of the marker on the map */ 
  onMarkerChange: propTypes.func.isRequired,
  /** Shows an text input above the map with the longitude and latitude of the marker.  Set false to hide */
  showCoords: propTypes.bool,
};

export default withGoogleMap(GoogleMapComponent);
