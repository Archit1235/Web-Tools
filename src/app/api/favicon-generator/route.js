import sharp from 'sharp';
import AdmZip from 'adm-zip';

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('image');

  if (!file) {
    return new Response('No file uploaded', { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const sizes = [16, 32, 48, 64, 128, 256, 512];
  const zip = new AdmZip();

  try {
    // Generate icons for all sizes and add to ZIP
    for (const size of sizes) {
      const iconBuffer = await sharp(buffer)
        .resize({
          width: size,
          height: size,
          fit: 'contain',
          background: '#ffffff', // White background
        })
        .png()
        .toBuffer();

      zip.addFile(`icon-${size}x${size}.png`, iconBuffer);
    }

    // Generate ZIP file
    const zipBuffer = zip.toBuffer();

    // Respond with the ZIP file
    return new Response(zipBuffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename=icons.zip',
      },
    });
  } catch (error) {
    console.error('Error generating ZIP:', error);
    return new Response('Failed to generate icons', { status: 500 });
  }
}
