export const htmlToText = (inputHtml) => {
  // Use regex to extract text from <p> tags
  const paragraphs = inputHtml.match(/<p>(.*?)<\/p>/gs);
  if (!paragraphs) return ''; // If no <p> tags are found, return empty string
  // Strip <p> tags and join paragraphs with double newlines
  return paragraphs
    .map((paragraph) => paragraph.replace(/<\/?p>/g, '').trim())
    .join('\n\n');
};
