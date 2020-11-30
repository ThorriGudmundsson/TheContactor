import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 35,
    backgroundColor: '#303F07',
  },
  thumbnailName: {
    fontSize: 20,
    fontWeight: '500',
    flexDirection: 'column',
    paddingTop: 24,
    paddingLeft: 6,
    color: '#303F07',
    width: 260,
//    numberOfLines: 1,
//    ellipsizeMode: 'tail',

  },
  contactThumbnailContainer: {
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#89B06F',
    borderRadius: 50,
    margin: 4,
    marginBottom: 8,
  },
});
