import {createStyle} from '@gluestack-style/react';

export const Input = createStyle({
  borderWidth: 1,
  borderColor: '$backgroundLight300',
  borderRadius: '$sm',
  flexDirection: 'row',
  overflow: 'hidden',
  alignContent: 'center',

  ':hover': {
    borderColor: '$borderLight400',
  },

  ':focus': {
    borderColor: '$primary500',
    ':hover': {
      borderColor: '$primary500',
    },
  },

  ':disabled': {
    opacity: 0.4,
    ':hover': {
      borderColor: '$backgroundLight300',
    },
  },

  _input: {
    py: 0,
    px: '$3',
    overflow: 'hidden',
  },

  _icon: {
    color: '$textLight400',
  },

  _dark: {
    borderColor: '$borderDark700',
    ':hover': {
      borderColor: '$borderDark400',
    },
    ':focus': {
      borderColor: '$primary300',
      ':hover': {
        borderColor: '$primary300',
      },
    },
    ':disabled': {
      ':hover': {
        borderColor: '$borderDark700',
      },
    },
  },

  variants: {
    size: {
      xl: {
        h: '$12',
        _input: {
          props: {
            size: 'xl',
          },
        },
        _icon: {
          props: {
            size: 'xl',
          },
        },
      },
      lg: {
        h: '$11',
        _input: {
          props: {
            size: 'lg',
          },
        },
        _icon: {
          props: {
            size: 'lg',
          },
        },
      },
      md: {
        h: '$10',
        _input: {
          props: {
            size: 'md',
          },
        },
        _icon: {
          props: {
            size: 'sm',
          },
        },
      },
      sm: {
        h: '$9',
        _input: {
          props: {
            size: 'sm',
          },
        },
        _icon: {
          props: {
            size: 'xs',
          },
        },
      },
    },
    variant: {
      underlined: {
        _input: {
          _web: {
            outlineWidth: 0,
            outline: 'none',
          },
          px: '$0',
        },
        borderWidth: 0,
        borderRadius: 0,
        borderBottomWidth: '$1',
        ':focus': {
          borderColor: '$primary500',
          _web: {
            boxShadow: 'inset 0 -1px 0 0 $primary500',
          },
        },
        ':invalid': {
          borderBottomWidth: 2,
          borderBottomColor: '$error500',
          _web: {
            boxShadow: 'inset 0 -1px 0 0 $error500',
          },
          ':hover': {
            borderBottomColor: '$error500',
          },
          ':focus': {
            borderBottomColor: '$error500',
            ':hover': {
              borderBottomColor: '$error500',
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $error500',
              },
            },
          },
          ':disabled': {
            ':hover': {
              borderBottomColor: '$error500',
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $error500',
              },
            },
          },
        },
        _dark: {
          ':focus': {
            borderColor: '$primary300',
            _web: {
              boxShadow: 'inset 0 -1px 0 0 $primary300',
            },
          },
          ':invalid': {
            borderColor: '$error300',
            _web: {
              boxShadow: 'inset 0 -1px 0 0 $error300',
            },
            ':hover': {
              borderBottomColor: '$error300',
            },
            ':focus': {
              borderBottomColor: '$error300',
              ':hover': {
                borderBottomColor: '$error300',
                _web: {
                  boxShadow: 'inset 0 -1px 0 0 $error300',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderBottomColor: '$error300',
                _web: {
                  boxShadow: 'inset 0 -1px 0 0 $error300',
                },
              },
            },
          },
        },
      },

      outline: {
        _input: {
          _web: {
            outlineWidth: 0,
            outline: 'none',
          },
        },
        ':focus': {
          borderColor: '$primary500',
          _web: {
            boxShadow: 'inset 0 0 0 1px $primary500',
          },
        },
        ':invalid': {
          borderColor: '$error500',
          _web: {
            boxShadow: 'inset 0 0 0 1px $error500',
          },
          ':hover': {
            borderColor: '$error500',
          },
          ':focus': {
            borderColor: '$error500',
            ':hover': {
              borderColor: '$error500',
              _web: {
                boxShadow: 'inset 0 0 0 1px $error500',
              },
            },
          },
          ':disabled': {
            ':hover': {
              borderColor: '$error500',
              _web: {
                boxShadow: 'inset 0 0 0 1px $error500',
              },
            },
          },
        },
        _dark: {
          ':focus': {
            borderColor: '$primary300',
            _web: {
              boxShadow: 'inset 0 0 0 1px $primary300',
            },
          },
          ':invalid': {
            borderColor: '$error300',
            _web: {
              boxShadow: 'inset 0 0 0 1px $error300',
            },
            ':hover': {
              borderColor: '$error300',
            },
            ':focus': {
              borderColor: '$error300',
              ':hover': {
                borderColor: '$error300',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error300',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderColor: '$error300',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error300',
                },
              },
            },
          },
        },
      },

      rounded: {
        borderRadius: 999,
        _input: {
          px: '$4',
          _web: {
            outlineWidth: 0,
            outline: 'none',
          },
        },
        ':focus': {
          borderColor: '$primary500',
          _web: {
            boxShadow: 'inset 0 0 0 1px $primary500',
          },
        },
        ':invalid': {
          borderColor: '$error500',
          _web: {
            boxShadow: 'inset 0 0 0 1px $error500',
          },
          ':hover': {
            borderColor: '$error500',
          },
          ':focus': {
            borderColor: '$error500',
            ':hover': {
              borderColor: '$error500',
              _web: {
                boxShadow: 'inset 0 0 0 1px $error500',
              },
            },
          },
          ':disabled': {
            ':hover': {
              borderColor: '$error500',
              _web: {
                boxShadow: 'inset 0 0 0 1px $error500',
              },
            },
          },
        },

        _dark: {
          ':focus': {
            borderColor: '$primary300',
            _web: {
              boxShadow: 'inset 0 0 0 1px $primary300',
            },
          },
          ':invalid': {
            borderColor: '$error300',
            _web: {
              boxShadow: 'inset 0 0 0 1px $error300',
            },
            ':hover': {
              borderColor: '$error300',
            },
            ':focus': {
              borderColor: '$error300',
              ':hover': {
                borderColor: '$error300',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error300',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderColor: '$error300',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error300',
                },
              },
            },
          },
        },
      },
    },
  },

  defaultProps: {
    size: 'md',
    rounded: '$lg',
    variant: 'outline',
  },
});
