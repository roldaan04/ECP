import { buildMetadata } from '@/lib/seo';
import { baloncesto } from '@/content/landings/baloncesto';
import LandingPage from '@/components/sections/LandingPage';

export const metadata = buildMetadata(baloncesto.seo);

export default function Page() {
  return <LandingPage content={baloncesto} />;
}
