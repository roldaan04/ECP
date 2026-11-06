import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, graph, personSchema, profilePageSchema, websiteSchema } from '@/lib/schema';
import { about } from '@/content/about';
import { services } from '@/config/navigation';
import JsonLd from '@/components/seo/JsonLd';
import AboutHero from '@/components/sections/AboutHero';
import AboutTimeline from '@/components/sections/AboutTimeline';
import LandingBlock from '@/components/sections/LandingBlock';
import AudienceList from '@/components/sections/AudienceList';
import CtaFinal from '@/components/sections/CtaFinal';

export const metadata = buildMetadata(about.seo);

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          personSchema(),
          websiteSchema(),
          profilePageSchema(about.seo.path),
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Sobre mí', path: about.seo.path },
          ]),
        )}
      />
      <AboutHero content={about} />
      <AboutTimeline content={about.timeline} />
      <LandingBlock index={2} block={{ type: 'grid', tone: 'dark', ...about.principles }} />
      <AudienceList
        tone="paper"
        quote={false}
        id="servicios"
        content={{
          ...about.services,
          items: services.map((s) => ({
            title: s.label,
            text: s.description,
            href: s.path,
            linkLabel: s.short,
          })),
        }}
      />
      <CtaFinal content={about.cta} />
    </>
  );
}
