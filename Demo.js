import React, { useState, useEffect } from 'react';
import {getApps } from 'react-native-map-link';
import { Pressable, Image, Text } from 'react-native';

const Demo = () => {
  const [availableApps, setAvailableApps] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getApps({
        latitude: 38.8976763,
        longitude: -77.0387185,
        title: 'Tammikatu 13 Iisalmi', // optional
        googleForceLatLon: false, // optionally force GoogleMaps to use the latlon for the query instead of the title
        alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
        appsWhiteList: ['google-maps'], // optionally you can set which apps to show (default: will show all supported apps installed on device)
      });
      console.log({result})
      setAvailableApps(result);
    })();
  }, []);

  return (
    <React.Fragment>
      {availableApps.map(({icon, name, id, open}) => (
        <Pressable key={id} onPress={open}>
          <Image source={icon} />
          <Text>{name}</Text>
        </Pressable>
      ))}
    </React.Fragment>
  );
};

export default Demo;