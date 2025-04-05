import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='container mx-auto text-center py-10'>
      <h1 className='text-4xl font-bold mb-6'>Welcome to Web Tools</h1>
      <p className='mb-6'>
        A collection of tools to make web development easier.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Link
          href='/tools/humanize'
          className='block p-4 border rounded-lg hover:bg-gray-100'
        >
          Humanize Text
        </Link>
        <Link
          href='/tools/favicon-generator'
          className='block p-4 border rounded-lg hover:bg-gray-100'
        >
          Favicon Generator
        </Link>
        <Link
          href='/tools/seo-analyzer'
          className='block p-4 border rounded-lg hover:bg-gray-100'
        >
          SEO Analyzer
        </Link>
      </div>
    </div>
  );
}
