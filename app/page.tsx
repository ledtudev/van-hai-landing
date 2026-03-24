import { AmenitiesSection } from '@/components/AmenitiesSection'
import { CoolcationBanner } from '@/components/CoolcationBanner'
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
      <ProjectOverview />
      <RegistrationSection id="bao-gia" />
      <LocationSection />
      <AmenitiesSection />
      <CoolcationBanner />
      <MasterplanSection />
      <PolicyInfographicSection />
      <DetailedPolicySection />
      <PolicyAndGallerySection />
      <ProgressSection />
      <RegistrationSection />
      <Footer />
      <FloatingHotline />
    </div>
  )
}
