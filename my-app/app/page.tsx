import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import {Footer} from '@/components/Footer'
import { sanityClient } from '@/utils/sanityClient';

export default async function Home() {
  const headerData = await sanityClient.fetch(`*[_type == "header"][0]{
    title
  }`);

  const heroData = await sanityClient.fetch(`*[_type == "hero"][0]{
    title,
    subtitle,
    backgroundImage
  }`);

  const footerData = await sanityClient.fetch(`*[_type == "footer"][0]{
    title
  }`);

  return (
    <div>
      <h1 className="text-2xl text-red-900">Welcome!</h1>
      <Header title={headerData.title} />
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        backgroundImage={heroData.backgroundImage}
      />
      <Footer title={footerData.title} />
    </div>
  );
}
