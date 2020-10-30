import { StyleSheet } from 'react-native';

export const bottomModal = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    opacity: 1,
    width: '100%',
    zIndex: 10,
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5.46,
    elevation: 9,
  },
  backdropZone: {
    flexDirection: 'row',
    height: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdropIcon: {
    height: 6,
    borderRadius: 3,
    width: 50,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  body: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  blur: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
