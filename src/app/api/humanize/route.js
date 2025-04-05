import { htmlToText } from '@/lib/htmlToText';
import { textToHtml } from '@/lib/textToHtml';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', 'bearer');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Origin', 'https://humanizeaitext.ai');
  myHeaders.append('Priority', 'u=1, i');
  myHeaders.append('Referer', 'https://humanizeaitext.ai/');

  const body = await req.json();

  const { text } = body;

  const raw = JSON.stringify({
    type: 'Standard',
    data: {
      prompts: [textToHtml(text)],
      target: 'EN-US',
      source: 'EN-US',
      standardGoals: {
        contentFocus: 'Informational',
        engagementLevel: 'Medium',
        tone: 'Neutral',
        clarity: 'Clear',
        languageComplexity: 'Simple',
      },
    },
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  try {
    const reponse = await fetch(
      'https://humanizeaitext-backend-epxkamsm6a-uc.a.run.app/humanize-free',
      requestOptions
    );

    const data = await reponse.json();

    return NextResponse.json(data.data.content[0]);
  } catch (error) {
    console.error('Error generating ZIP:', error);
    return new Response('Failed to generate icons', { status: 500 });
  }
}
