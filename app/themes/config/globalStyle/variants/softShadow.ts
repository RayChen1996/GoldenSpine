export default {
  '1': {
    shadowColor: '$backgroundLight900',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    _android: {
      shadowColor: '$backgroundLight500',
      elevation: 5,
      shadowOpacity: 0.05,
    },
  },
  '2': {
    shadowColor: '$backgroundLight900',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 3,
    shadowOpacity: 0.1,
    _android: {
      shadowColor: '$backgroundLight500',
      elevation: 10,
      shadowOpacity: 0.1,
    },
  },
  '3': {
    shadowColor: '$backgroundLight900',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 30,
    shadowOpacity: 0.1,
    elevation: 4,
    _android: {
      shadowColor: '$backgroundLight500',
      elevation: 15,
      shadowOpacity: 0.15,
    },
  },
  '4': {
    shadowColor: '$backgroundLight900',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    shadowOpacity: 0.1,
    elevation: 10,
    _android: {
      shadowColor: '$backgroundLight500',
      elevation: 20,
      shadowOpacity: 0.2,
    },
  },
} as const;
