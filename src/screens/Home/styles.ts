import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  start: {
    backgroundColor: '#FFD606',
    width: 60,
    height: 40,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  time: {
    alignItems: 'center',
  },
  names: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  pontos: {
    width: "100%",
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  buttons3: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50
  },
  buttons1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 100
  },
  faltas:{
    width: 20,
    height: 20,
    backgroundColor: '#FFD606',
    marginHorizontal: 5
  }
});