import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Connect } from '@/components/connect'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'


export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="min-h-screen bg-background text-foreground">
        
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Connect />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

