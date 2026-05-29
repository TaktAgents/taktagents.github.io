import { Layout } from "@/components/layout"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Features } from "@/components/sections/features"
import { Cli } from "@/components/sections/cli"
import { Guard } from "@/components/sections/guard"
import { Limits } from "@/components/sections/limits"
import { Config } from "@/components/sections/config"
import { Philosophy } from "@/components/sections/philosophy"
import { Cta } from "@/components/sections/cta"

function App() {
  return (
    <Layout>
      <Hero />
      <Problem />
      <Features />
      <Cli />
      <Guard />
      <Limits />
      <Config />
      <Philosophy />
      <Cta />
    </Layout>
  )
}

export default App
