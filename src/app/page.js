import { buildMetadata } from '@/lib/seo';
import { graph, personSchema, websiteSchema } from '@/lib/schema';
import { home } from '@/content/home';
import JsonLd from '@/components/seo/JsonLd';
import HeroHome from '@/components/sections/HeroHome';
import AudienceList from '@/components/sections/AudienceList';
import ServiceIndex from '@/components/sections/ServiceIndex';
import MethodSteps from '@/components/sections/MethodSteps';
import ProfileTeaser from '@/components/sections/ProfileTeaser';
import BasketBridge from '@/components/sections/BasketBridge';
import PricingPreview from '@/components/sections/PricingPreview';
import Testimonials from '@/components/sections/Testimonials';
import FaqList from '@/components/sections/FaqList';
import CtaFinal from '@/components/sections/CtaFinal';

export const metadata = buildMetadata(home.seo);

export default function Page() {
  return (
    <>
      <JsonLd data={graph(personSchema(), websiteSchema())} />
      <HeroHome content={home.hero} />
      <AudienceList content={home.audience} />
      <ServiceIndex content={home.services} />
      <MethodSteps content={home.method} />
      <ProfileTeaser content={home.profile} />
      <BasketBridge content={home.basket} />
      <PricingPreview content={home.pricing} />
      <Testimonials />
      <FaqList content={home.faq} />
      <CtaFinal content={home.ctaFinal} />
    </>
  );
}
