'use client';

import React, { useState } from 'react';

export default function UploadForm({ onImageUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type.startsWith('image/')) {
      setFile(URL.createObjectURL(uploadedFile));
      onImageUpload(uploadedFile);
    }
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      <input
        type='file'
        accept='image/png'
        onChange={handleFileChange}
        className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none'
      />
      {file && (
        <img src={file} alt='Uploaded' className='max-w-xs rounded-lg' />
      )}
    </div>
  );
}
