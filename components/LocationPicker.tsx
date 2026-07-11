import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

interface Props {
  latitude?: number;
  longitude?: number;
  onLocationSelected: (location: {
    latitude: number;
    longitude: number;
  }) => void;
}

export default function LocationPicker({
  latitude,
  longitude,
  onLocationSelected,
}: Props) {
  const [region, setRegion] = useState({
    latitude: latitude || -15.4167,
    longitude: longitude || 28.2833,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const getCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission required", "Location permission is needed");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});

    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    setRegion({
      ...region,
      ...coords,
    });

    onLocationSelected(coords);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={getCurrentLocation}
        style={{
          backgroundColor: "#2563eb",
          padding: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white" }}>📍 Use Current Location</Text>
      </TouchableOpacity>

      <MapView
        style={{
          height: 300,
          borderRadius: 10,
        }}
        region={region}
        onPress={(e) => {
          const coords = e.nativeEvent.coordinate;

          setRegion({
            ...region,
            ...coords,
          });

          onLocationSelected(coords);
        }}
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          draggable
          onDragEnd={(e) => {
            const coords = e.nativeEvent.coordinate;

            setRegion({
              ...region,
              ...coords,
            });

            onLocationSelected(coords);
          }}
        />
      </MapView>

      <Text>
        Latitude:
        {region.latitude}
      </Text>

      <Text>
        Longitude:
        {region.longitude}
      </Text>
    </View>
  );
}
