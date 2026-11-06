import { breadcrumbSchema, graph, personSchema, serviceSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';
import LandingHero from '@/components/sections/LandingHero';
import LandingBlock from '@/components/sections/LandingBlock';
import FaqList from '@/components/sections/FaqList';
import CtaFinal from '@/components/sections/CtaFinal';

/**
 * Plantilla de landing de servicio. El contenido (content/landings/*.js) define la variante del hero
 * y el orden y tipo de bloques, para que cada landing tenga composición propia.
 * @param {{ content: any }} props
 */
export default function LandingPage({ content }) {
  const { seo, schema, variant, waContext } = content;
  const data = graph(
    personSchema(),
    serviceSchema({ path: seo.path, ...schema }),
    breadcrumbSchema([
      { name: 'Inicio', path: '/' },
      { name: content.breadcrumb, path: seo.path },
    ]),
  );
  return (
    <>
      <JsonLd data={data} />
      <LandingHero
        content={content.hero}
        variant={variant}
        breadcrumb={content.breadcrumb}
        waContext={waContext}
      />
      {content.blocks.map((b, i) => (
        <LandingBlock key={`${b.type}-${i}`} block={b} index={i} />
      ))}
      <FaqList content={content.faq} tone={content.blocks.at(-1)?.tone === 'paper' ? 'dark' : 'paper'} />
      <CtaFinal content={content.cta} context={waContext} />
    </>
  );
}
