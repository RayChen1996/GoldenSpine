export default {
  '1': {
    shadowColor: '$backgroundLight900',
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    elevation: 10,
  },
  '2': {
    shadowColor: '$backgroundLight900',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    elevation: 10,
  },
  '3': {
    shadowColor: '$backgroundLight900',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    elevation: 10,
  },
  '4': {
    shadowColor: '$backgroundLight900',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    elevation: 10,
  },
  // this 5th version is only for toast shadow
  // temporary
  '5': {
    shadowColor: '$backgroundLight900',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 10,
  },
} as const;
