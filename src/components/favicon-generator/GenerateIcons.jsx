'use client';

import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';

export default function GenerateIcons({ uploadedImage }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateIcons = async () => {
    if (!uploadedImage) return;

    setIsGenerating(true);

    const formData = new FormData();
    formData.append('image', uploadedImage);

    try {
      const response = await fetch('/api/favicon-generator', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to generate icons');
      }

      const blob = await response.blob();
      const zipUrl = URL.createObjectURL(blob);

      const anchor = document.createElement('a');
      anchor.href = zipUrl;
      anchor.download = 'icons.zip';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      setIsGenerating(false);
    } catch (error) {
      console.error('Error generating icons:', error);
      setIsGenerating(false);
    }
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      <button
        onClick={generateIcons}
        className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'
      >
        {isGenerating ? 'Generating...' : 'Generate Icons'}
      </button>
    </div>
  );
}
