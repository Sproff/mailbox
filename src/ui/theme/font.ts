import localFont from "next/font/local"

export const monaSans = localFont({
  variable: "--font-mona-sans",
  display: "swap",
  src: [
    {
      path: "./fonts/mona-sans/MonaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/mona-sans/MonaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/mona-sans/MonaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/mona-sans/MonaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/mona-sans/MonaSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
})
