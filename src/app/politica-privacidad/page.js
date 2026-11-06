import { buildMetadata } from '@/lib/seo';
import { legal } from '@/content/legal';
import LegalPage from '@/components/sections/LegalPage';

// Borrador: noindex hasta incorporar los datos del responsable.
export const metadata = buildMetadata({ ...legal.privacidad.seo, noindex: true });

export default function Page() {
  return <LegalPage content={legal.privacidad} />;
}
