import {Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const styles = {
  scrollViewStyle: {
    flex: 1,
    //        justifyContent: 'center',
    backgroundColor: '#EFF0F6',
  },

  textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 16,
    color: '#010101',
  },

  scanTextTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#010101',
  },

  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
    paddingBottom: 5,
    color: '#010101',
  },

  textDetail: {
    fontSize: 16,
    textAlign: 'left',
    paddingBottom: 5,
    color: '#D8AB04',
    textTransform: 'uppercase',
  },

  securityTextDetail: {
    fontSize: 16,
    textAlign: 'left',
    paddingBottom: 5,
    color: '#D8AB04',
  },

  detailedTextTitle: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
    color: '#010101',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  textTitle1: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 16,
    color: 'black',
  },
  cardView: {
    width: deviceWidth - 32,
    height: deviceHeight / 2,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: 'white',
  },
  scanCardView: {
    width: deviceWidth - 32,
    height: deviceHeight / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: 'white',
  },
  buttonScan: {
    width: 42,
  },
  descText: {
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify',
    fontSize: 16,
  },

  highlight: {
    fontWeight: '700',
  },

  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonTouchable: {
    fontSize: 21,
    backgroundColor: '#ffd700',
    marginTop: 20,
    borderRadius: 20,
    width: deviceWidth - 120,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
  },
  buttonTouchableDanger: {
    fontSize: 21,
    backgroundColor: '#E55437',
    marginTop: 20,
    borderRadius: 20,
    width: deviceWidth - 120,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
  },

  buttonTouchableSuccess: {
    fontSize: 18,
    backgroundColor: '#021E3B',
    marginTop: 20,
    borderRadius: 20,
    width: deviceWidth - 160,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
  },

  buttonTextStyle: {
    color: '#010101',
    fontWeight: 'bold',
    fontSize: 18,
  },

  buttonSubmitTextStyle: {
    color: '#ffd700',
    fontWeight: 'normal',
    fontSize: 18,
  },

  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 10,
    backgroundColor: '#ffd700',
  },

  touchableOpacityTopStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    top: 36,
    backgroundColor: '#ffd700',
  },
};
export default styles;
