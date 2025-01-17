export const error = {
  error50: '#fef2f2',
  error100: '#fee2e2',
  error200: '#fecaca',
  error300: '#fca5a5',
  error400: '#f87171',
  error500: '#ef4444',
  error600: '#dc2626',
  error700: '#b91c1c',
  error800: '#991b1b',
  error900: '#7f1d1d',
  error950: '#450a0a',
} as const;
// error00: '#FEE9E9',
// error50: '#FEE2E2',
// error100: '#FECACA',
// error200: '#FCA5A5',
// error300: '#F87171',
// error400: '#EF4444',
// error500: '#E63535',
// error600: '#DC2626',
// error700: '#B91C1C',
// error800: '#7F1D1D',
// error900: '#991B1B',
// error950: '#220808',

export const success = {
  success50: '#f0fdf4',
  success100: '#dcfce7',
  success200: '#bbf7d0',
  success300: '#86efac',
  success400: '#4ade80',
  success500: '#22c55e',
  success600: '#16a34a',
  success700: '#15803d',
  success800: '#166534',
  success900: '#14532d',
  success950: '#052e16',
} as const;
// success0: '#E4FFF4',
// success50: '#CAFFE8',
// success100: '#A2F1C0',
// success200: '#84D3A2',
// success300: '#66B584',
// success400: '#489766',
// success500: '#348352',
// success600: '#2A7948',
// success700: '#206F3E',
// success800: '#166534',
// success900: '#14532D',
// success950: '#071F11',

export const info = {
  info50: '#f0f9ff',
  info100: '#e0f2fe',
  info200: '#bae6fd',
  info300: '#7dd3fc',
  info400: '#38bdf8',
  info500: '#0ea5e9',
  info600: '#0284c7',
  info700: '#0369a1',
  info800: '#075985',
  info900: '#0c4a6e',
  info950: '#082f49',
} as const;
// info50: '#f0f9ff',
// info100: '#e0f2fe',
// info200: '#bae6fd',
// info300: '#7dd3fc',
// info400: '#38bdf8',
// info500: '#0ea5e9',
// info600: '#0284c7',
// info700: '#0369a1',
// info800: '#075985',
// info900: '#0c4a6e',

export const warning = {
  warning50: '#fff7ed',
  warning100: '#ffedd5',
  warning200: '#fed7aa',
  warning300: '#fdba74',
  warning400: '#fb923c',
  warning500: '#f97316',
  warning600: '#ea580c',
  warning700: '#c2410c',
  warning800: '#9a3412',
  warning900: '#7c2d12',
  warning950: '#431407',
} as const;
// warning50: '#fff7ed',
// warning100: '#ffedd5',
// warning200: '#fed7aa',
// warning300: '#fdba74',
// warning400: '#fb923c',
// warning500: '#f97316',
// warning600: '#ea580c',
// warning700: '#c2410c',
// warning800: '#9a3412',
// warning900: '#7c2d12',

export default {
  ...error,
  ...success,
  ...info,
  ...warning,
} as const;
