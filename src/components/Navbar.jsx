'use client';

import { Button } from '@nextui-org/react';

export default function Navbar() {
  return (
    <header className='flex justify-between items-center p-4 bg-gray-100'>
      <h1 className='text-xl font-bold'>Web Tools</h1>
      <nav>
        <Button href='/favicon-generator' className='mx-2'>
          Favicon Generator
        </Button>
        <Button disabled className='mx-2'>
          Other Tools (Coming Soon)
        </Button>
      </nav>
    </header>
  );
}
