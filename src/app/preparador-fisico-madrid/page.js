import { buildMetadata } from '@/lib/seo';
import { preparacion } from '@/content/landings/preparacion';
import LandingPage from '@/components/sections/LandingPage';

export const metadata = buildMetadata(preparacion.seo);

export default function Page() {
  return <LandingPage content={preparacion} />;
}
