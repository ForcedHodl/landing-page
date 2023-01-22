import "styled-components";

import { GetSpacingFunction } from "./spacing";

// Based on the recommendation from https://styled-components.com/docs/api#create-a-declarations-file
declare module "styled-components" {
  export interface DefaultTheme {
    getSpacing: (
      ...spacingMultipliers: Parameters<GetSpacingFunction>
    ) => ReturnType<GetSpacingFunction>;
  }
}
