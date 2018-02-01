// import libraries for making a componente
import React from 'react';
import { Text } from 'react-native';

// make a componente
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums!!</Text>;
};

// styles for react native
const styles = {
  textStyle: {
    fontSize: 20
  }
};


// make the component available in other parts of the app
export default Header;
