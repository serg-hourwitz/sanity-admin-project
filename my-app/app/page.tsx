import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import Table from '@/components/Table';
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

  const tables = await sanityClient.fetch(`*[_type == "table"]{
  _id,
  title,
  columns,
  rows[]{cells}
}`);

  console.log('Sanity tables:', tables);

  if (!tableData) {
    return <div>Таблиця не знайдена</div>;
  }

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

      <Footer title={footerData.title} />
    </div>
  );
}
