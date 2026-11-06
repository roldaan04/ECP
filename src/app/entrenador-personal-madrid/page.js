import { buildMetadata } from '@/lib/seo';
import { personal } from '@/content/landings/personal';
import LandingPage from '@/components/sections/LandingPage';

export const metadata = buildMetadata(personal.seo);

export default function Page() {
  return <LandingPage content={personal} />;
}
