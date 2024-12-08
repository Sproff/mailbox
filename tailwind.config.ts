import type { Config } from "tailwindcss"

import { preset } from "./src/ui/theme/preset"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: preset,
  plugins: [],
}
export default config
