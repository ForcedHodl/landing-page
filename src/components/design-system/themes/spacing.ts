const spacing_unit = 'px';
const spacing_unit_size = 4;

export type GetSpacingFunction =
  | ((spacingMultiplier: number) => string)
  | ((verticalSpacingMultiplier: number, horizontalSpacingMultiplier: number) => string)
  | ((topSpacingMultiplier: number, horizontalSpacingMultiplier: number, bottomSpacingMultiplier: number) => string)
  | ((
      topSpacingMultiplier: number,
      rightSpacingMultiplier: number,
      bottomSpacingMultiplier: number,
      leftSpacingMultiplier: number
    ) => string);

/**
 * Helper function used to generalize the way we handle spacing across our css properties
 * @param spacingMultipliers number(s) specifying how much spacing unit we want
 */
function getSpacing(...spacingMultipliers: Parameters<GetSpacingFunction>): ReturnType<GetSpacingFunction> {
  return spacingMultipliers
    .map((spacingMultiplier) => `${spacingMultiplier * spacing_unit_size}${spacing_unit}`)
    .join(' ');
}

export default getSpacing;
