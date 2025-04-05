export default function Instructions() {
  return (
    <div className='mt-10'>
      <h2 className='text-xl font-bold'>Instructions</h2>
      <ul className='list-disc ml-6 space-y-2'>
        <li>Extract the downloaded ZIP file.</li>
        <li>
          Move all files to your `public/` directory in your Next.js project.
        </li>
        <li>
          Add the following metadata to your `layout.js` file:
          <pre className='bg-gray-100 rounded p-4 mt-2 text-sm'>
            <code>
              {`
export const metadata = {
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};
              `}
            </code>
          </pre>
        </li>
      </ul>
    </div>
  );
}
