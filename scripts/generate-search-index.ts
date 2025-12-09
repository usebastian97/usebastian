import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';
import matter from 'gray-matter';

interface SearchItem {
  title: string;
  description: string;
  url: string;
  category: 'blog' | 'project' | 'use-case';
  tags?: string[];
  content?: string;
}

async function generateSearchIndex() {
  console.log('🔍 Generating search index...');

  const searchIndex: SearchItem[] = [];
  const contentDir = path.join(process.cwd(), 'src', 'content');

  // Process blog posts
  const blogFiles = await glob('blog/**/*.mdx', { cwd: contentDir });
  for (const file of blogFiles) {
    const filePath = path.join(contentDir, file);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    const slug = path.basename(file, '.mdx');
    
    searchIndex.push({
      title: data.title || 'Untitled',
      description: data.description || '',
      url: `/blog/${slug}`,
      category: 'blog',
      tags: data.tags || [],
      content: content.slice(0, 500),
    });
  }

  // Process projects
  const projectFiles = await glob('projects/**/*.mdx', { cwd: contentDir });
  for (const file of projectFiles) {
    const filePath = path.join(contentDir, file);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    const slug = path.basename(file, '.mdx');
    
    searchIndex.push({
      title: data.title || 'Untitled',
      description: data.description || '',
      url: `/projects/${slug}`,
      category: 'project',
      tags: data.tags || [],
      content: content.slice(0, 500),
    });
  }

  // Process use cases
  const useCaseFiles = await glob('use-cases/**/*.mdx', { cwd: contentDir });
  for (const file of useCaseFiles) {
    const filePath = path.join(contentDir, file);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    const slug = path.basename(file, '.mdx');
    
    searchIndex.push({
      title: data.title || 'Untitled',
      description: data.description || '',
      url: `/use-cases/${slug}`,
      category: 'use-case',
      tags: data.technologies || [],
      content: content.slice(0, 500),
    });
  }

  // Write to public directory
  const publicDir = path.join(process.cwd(), 'public');
  const searchIndexPath = path.join(publicDir, 'search-index.json');

  await fs.writeFile(searchIndexPath, JSON.stringify(searchIndex, null, 2), 'utf-8');

  console.log(`✅ Search index generated with ${searchIndex.length} items`);
  console.log(`   - ${blogFiles.length} blog posts`);
  console.log(`   - ${projectFiles.length} projects`);
  console.log(`   - ${useCaseFiles.length} use cases`);
  console.log(`   📄 Index saved to: ${searchIndexPath}`);
}

generateSearchIndex().catch(console.error);
