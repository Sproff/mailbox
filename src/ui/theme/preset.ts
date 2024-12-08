import { animation } from "./animation"
import { colors } from "./colors"
import { keyframes } from "./keyframes"
import { spacing } from "./spacing"
import { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } from "./typography"

export const preset = {
  colors,
  spacing,
  animation,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  extend: {
    keyframes,
  },
}
