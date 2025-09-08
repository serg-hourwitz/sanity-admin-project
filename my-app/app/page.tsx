import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import Table from '@/components/Table';
import Accordion from '@/components/Accordion';
import { sanityClient } from '@/utils/sanityClient';

export const revalidate = 0; // потрібне для отримання актуальних даних з Sanity

export default async function Home() {
  const headerData = await sanityClient.fetch(`*[_type == "header"][0]{
    title
  }`);

  const heroData = await sanityClient.fetch(`*[_type == "hero"][0]{
    title,
    subtitle,
    backgroundImage
  }`);

  const tableData = await sanityClient.fetch(
    `*[_type == "table" && slug.current == $slug][0]{
    title,
    columns,
    rows[]{cells}
  }`,
    { slug: 'homepage-table' } // ← тут твій slug
  );

  const tableData1 = await sanityClient.fetch(
    `*[_type == "table" && slug.current == $slug][0]{
    title,
    columns,
    rows[]{cells}
  }`,
    { slug: 'home' } // ← тут твій slug
  );

  const accordionData = await sanityClient.fetch(
    `*[_type == "accordion" && slug.current == $slug][0]{
      title,
      items[]{
        title,
        content
      }
    }`,
    { slug: 'homepage-accordion' } // ← тут твій slug
  );
  const accordionData1 = await sanityClient.fetch(
    `*[_type == "accordion" && slug.current == $slug][0]{
      title,
      items[]{
        title,
        content
      }
    }`,
    { slug: 'home' } // ← тут твій slug
  );

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
      <Table
        title={tableData?.title || 'Таблиця не знайдена'}
        columns={tableData?.columns || []}
        rows={tableData?.rows?.map((r: any) => r.cells) || []}
      />
      <Table
        title={tableData1?.title || 'Таблиця не знайдена'}
        columns={tableData1?.columns || []}
        rows={tableData1?.rows?.map((r: any) => r.cells) || []}
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">{accordionData.title}</h1>
        <Accordion items={accordionData.items} />
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">{accordionData1.title}</h1>
        <Accordion items={accordionData1.items} />
      </div>
      <Footer title={footerData.title} />
    </div>
  );
}
