export const textToHtml = (inputText) => {
  // Split the text into paragraphs based on double newlines
  const paragraphs = inputText.split('\n\n');
  // Wrap each paragraph in <p> tags
  const htmlParagraphs = paragraphs
    .filter((paragraph) => paragraph.trim()) // Remove empty paragraphs
    .map((paragraph) => `<p>${paragraph.trim()}</p>`);
  // Join the paragraphs into a single HTML string
  return htmlParagraphs.join('\n');
};
