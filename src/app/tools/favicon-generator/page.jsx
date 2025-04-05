'use client';

import { useState } from 'react';
import { Input, Button, Card } from 'next-ui';
import generateFavicons from '../../lib/favicon-generator';
import Instructions from './Instructions';
import FaviconPreview from './FaviconPreview';

export default function FaviconGenerator() {
  const [file, setFile] = useState(null);
  const [themeColor, setThemeColor] = useState('#ffffff');
  const [previewData, setPreviewData] = useState([]);
  const [zipBlob, setZipBlob] = useState(null);

  const handleGenerate = async () => {
    if (!file) return alert('Please upload a PNG file.');
    const result = await generateFavicons(file, themeColor);
    setPreviewData(result.previews);
    setZipBlob(result.zip);
  };

  return (
    <div className='space-y-8'>
      <Card className='p-4'>
        <h1 className='text-2xl font-bold'>Favicon Generator</h1>
        <p className='text-gray-600'>
          Upload a PNG file to generate favicons and manifest files for your
          project.
        </p>
        <div className='flex items-center gap-4 mt-4'>
          <Input
            type='file'
            accept='image/png'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Input
            type='color'
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
          />
          <Button onClick={handleGenerate}>Generate</Button>
        </div>
      </Card>

      {previewData.length > 0 && (
        <Card className='p-4'>
          <FaviconPreview previews={previewData} />
          <Button
            as='a'
            href={URL.createObjectURL(zipBlob)}
            download='icons.zip'
            className='mt-4'
          >
            Download ZIP
          </Button>
        </Card>
      )}

      <Instructions />
    </div>
  );
}
