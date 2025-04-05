import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='container mx-auto text-center py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Link
          href='/tools/humanize'
          className='block p-4 border rounded-lg hover:bg-gray-100'
        >
          Humanize Text
        </Link>
      </div>
    </div>
  );
}
