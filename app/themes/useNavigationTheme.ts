import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {useToken} from '@gluestack-style/react';
import {produce} from 'immer';

export default function useNavigationTheme() {
  const colorScheme = useColorScheme();

  const backgroundLight = useToken('colors', 'backgroundLight0') as string;
  const backgroundDark = useToken('colors', 'backgroundDark950') as string;

  const lightTheme = useMemo(
    () =>
      produce(DefaultTheme, draft => {
        draft.colors.background = backgroundLight;
      }),
    [backgroundLight],
  );

  const darkTheme = useMemo(
    () =>
      produce(DarkTheme, draft => {
        draft.colors.background = backgroundDark;
      }),
    [backgroundDark],
  );

  return colorScheme === 'dark' ? darkTheme : lightTheme;
}
