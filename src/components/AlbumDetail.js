import React from 'react';
import { Text } from 'react-native';

import Card from './Card';

const AlbumDetail = (props) => {
  console.info('props from album-detail', props);

  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
};

export default AlbumDetail;
