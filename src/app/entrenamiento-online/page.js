import { buildMetadata } from '@/lib/seo';
import { online } from '@/content/landings/online';
import LandingPage from '@/components/sections/LandingPage';

export const metadata = buildMetadata(online.seo);

export default function Page() {
  return <LandingPage content={online} />;
}
