import { createConfig, createComponents } from "@gluestack-style/react";
import * as componentsTheme from "./theme";

import themeConfig from "@/app/themes/config";

export const gluestackUIConfig = createConfig(themeConfig);

type Config = typeof gluestackUIConfig; // Assuming `config` is defined elsewhere

type Components = typeof componentsConfig;

export const componentsConfig = createComponents(componentsTheme);

export type { UIConfig, UIComponents } from "@gluestack-ui/themed";

export interface IConfig {}
export interface IComponents {}

declare module "@gluestack-ui/themed" {
  interface UIConfig extends Omit<Config, keyof IConfig>, IConfig {}
  interface UIComponents
    extends Omit<Components, keyof IComponents>,
      IComponents {}
}

export const config = {
  ...gluestackUIConfig,
  components: componentsConfig,
};
