'use client';

import { useState } from 'react';
import { Button, Spinner } from '@nextui-org/react';

const Humanize = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [humanizedText, setHumanizedText] = useState('');

  const humanizeText = async (text) => {
    setLoading(true);

    const reponse = await fetch('/api/humanize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const data = await reponse.json();

    setLoading(false);

    setHumanizedText(data);
  };

  return (
    <div className='flex flex-col items-center gap-10 p-5 flex-1 size-full'>
      <div className='flex flex-row gap-5 size-full'>
        <textarea
          value={text}
          label='Enter Text'
          rows={30}
          className='size-full border-2 rounded-lg p-5 flex-1'
          onChange={(e) => setText(e.target.value)}
        />

        <div className=' w-full h-full border-2 rounded-lg p-5 flex-1'>
          {loading ? (
            <Spinner size='large' />
          ) : (
            <div
              className='space-y-5'
              dangerouslySetInnerHTML={{ __html: humanizedText }}
            />
          )}
        </div>
      </div>

      <Button onClick={() => humanizeText(text)}>Humanize</Button>
    </div>
  );
};

export default Humanize;
