import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Marker } from 'react-native-maps';

export default class CustomMarker extends Component {
  shouldComponentUpdate(nextProps) {
    return !(this.props.geometry === nextProps.geometry
      && this.props.pointCount === nextProps.pointCount);
  }

  render() {
    let pointCount = this.props.pointCount
    if(pointCount===0 && this.props.showSingleMarkerCluster){
      pointCount = 1
    }
    if (pointCount > 0) {
      return (
        <Marker
          coordinate={{
            longitude: this.props.geometry.coordinates[0],
            latitude: this.props.geometry.coordinates[1],
          }}
          onPress={pointCount > 0 && this.props.onClusterPress}
        >
          <View style={this.props.clusterStyle}>
            <Text style={this.props.clusterTextStyle}>
              {pointCount}
            </Text>
          </View>
        </Marker>
      );
    }
    return this.props.marker;
  }
}
