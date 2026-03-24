import { AmenitiesSection } from '@/components/AmenitiesSection'
import { CoolcationBanner } from '@/components/CoolcationBanner'
import { FadeIn } from '@/components/FadeIn'
import { FloatingHotline } from '@/components/FloatingHotline'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { LocationSection } from '@/components/LocationSection'
import { MasterplanSection } from '@/components/MasterplanSection'
import { PolicyAndGallerySection } from '@/components/PolicyAndGallerySection'
import { ProjectOverview } from '@/components/ProjectOverview'
import { PolicyInfographicSection } from '@/components/PolicyInfographicSection'
import { DetailedPolicySection } from '@/components/DetailedPolicySection'
import { ProgressSection } from '@/components/ProgressSection'
import { RegistrationSection } from '@/components/RegistrationSection'

export default function Home() {
  return (
    <div className="bg-white text-zinc-900">
      <Hero />
      <FadeIn direction="up">
        <ProjectOverview />
      </FadeIn>
      <FadeIn direction="up" delay={0.05}>
        <RegistrationSection id="bao-gia" />
      </FadeIn>
      <FadeIn direction="up">
        <LocationSection />
      </FadeIn>
      <FadeIn direction="up">
        <AmenitiesSection />
      </FadeIn>
      <FadeIn direction="scale" delay={0.05}>
        <CoolcationBanner />
      </FadeIn>
      <FadeIn direction="up">
        <MasterplanSection />
      </FadeIn>
      <FadeIn direction="up">
        <PolicyInfographicSection />
      </FadeIn>
      <FadeIn direction="up">
        <DetailedPolicySection />
      </FadeIn>
      <FadeIn direction="up">
        <PolicyAndGallerySection />
      </FadeIn>
      <FadeIn direction="up">
        <ProgressSection />
      </FadeIn>
      <FadeIn direction="up" delay={0.05}>
        <RegistrationSection />
      </FadeIn>
      <FadeIn direction="up">
        <Footer />
      </FadeIn>
      <FloatingHotline />
    </div>
  )
}
