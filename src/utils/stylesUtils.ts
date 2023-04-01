export const spacingY = (
  gap: number,
  unit = 'rem',
  { reversed = false }: { reversed?: boolean } = {}
) => `
& > *:not(:${reversed ? 'last-child' : 'first-child'}) {
  margin-top: ${gap}${unit};
}`;

export const spacingX = (
  gap: number,
  unit = 'rem',
  { reversed = false }: { reversed?: boolean } = {}
) => `
& > *:not(:${reversed ? 'first-child' : 'last-child'}) {
  margin-right: ${gap}${unit};
}`;
