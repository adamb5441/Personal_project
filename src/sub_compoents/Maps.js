import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from './../images/baseline_trip_origin_black_18dp.png'
require('dotenv').config();

const AnyReactComponent = ({ img }) => <div>{img}</div>;
 const {REACT_APP_GOOGLE_MAPS} = process.env
class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 40.23,
      lng: -111.65
    },
    zoom: 11
  };
 
  render() {
    console.log(this.props.center);
    return (
      
      <div style={{ height: '90vh', width: '160vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAPS }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded
        >
          <AnyReactComponent
            lat={40.2338}
            lng={-111.6585}
            img={<img src={marker} />}
          />
        </GoogleMapReact>
        
      </div>
    );
  }
}
 
export default Maps;