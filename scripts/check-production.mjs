import { readFile } from 'node:fs/promises';

const requiredVariables = [
  ['NEXT_PUBLIC_SITE_URL', 'domínio definitivo com HTTPS'],
  ['NEXT_PUBLIC_SITE_DESCRIPTION', 'descrição oficial do livro'],
  ['NEXT_PUBLIC_SOCIAL_IMAGE_URL', 'imagem social oficial'],
  ['NEXT_PUBLIC_WHATSAPP_URL', 'link oficial do WhatsApp'],
  ['NEXT_PUBLIC_AMAZON_URL', 'link oficial do e-book na Amazon'],
];

const missingVariables = requiredVariables.filter(([name]) => {
  const value = process.env[name]?.trim() ?? '';
  return (
    !value || value.includes('PLACEHOLDER') || !value.startsWith('https://')
  );
});

const filesWithContent = [
  'lib/site-content.ts',
  'components/book-placeholder.tsx',
  'components/sections/author-section.tsx',
];
const placeholderFiles = [];

for (const file of filesWithContent) {
  const source = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
  if (source.includes('[PLACEHOLDER')) placeholderFiles.push(file);
}

if (missingVariables.length || placeholderFiles.length) {
  console.error('O projeto ainda não está pronto para publicação.');

  for (const [name, label] of missingVariables) {
    console.error(`- Informe ${label} em ${name}.`);
  }
  for (const file of placeholderFiles) {
    console.error(`- Substitua os placeholders restantes em ${file}.`);
  }
  process.exitCode = 1;
} else {
  console.log('Verificação concluída: dados obrigatórios preenchidos.');
}
