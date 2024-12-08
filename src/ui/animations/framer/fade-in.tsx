import * as motion from "framer-motion/client"
import { ReactNode } from "react"

export const FadeIn = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
