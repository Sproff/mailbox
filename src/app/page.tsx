import { WelcomeOverview } from "@mbl-modules/mail/components/welcome-overview"

import { FadeIn } from "@mbl-ui/animations/framer/fade-in"

const Home = () => {
  return (
    <FadeIn>
      <div className="p-1 md:p-0">
        <WelcomeOverview />
      </div>
    </FadeIn>
  )
}
export default Home
