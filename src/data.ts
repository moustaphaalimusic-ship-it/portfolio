import { Project, Experience } from './types';

const SUPABASE_BASE_URL = 'https://qwsgihibnntwbgfovjao.supabase.co/storage/v1/object/public/works';

export const getUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${SUPABASE_BASE_URL}/${cleanPath.split('/').map(encodeURIComponent).join('/')}`;
};

export const projects: Project[] = [
  {
    id: 'twitch',
    title: 'TWITCH',
    description: 'A comprehensive product advertising campaign developed to highlight flavor variety, refreshment, and strong visual impact through dynamic compositions and vibrant color systems.',
    industry: 'Beverage',
    focus: 'Product Advertising',
    highlights: [
      'Product Manipulation',
      'Campaign Design',
      'Flavor-Based Visual Systems',
      'Social Media Advertising'
    ],
    image: '/Campaigns/Twitch Campaign/Twitch Malt Drink Green Apple.jpg',
    category: 'campaign',
    images: [
      '/Campaigns/Twitch Campaign/Twitch Malt Drink Green Apple.jpg',
      '/Campaigns/Twitch Campaign/Twitch Malt Drink Peach.jpg',
      '/Campaigns/Twitch Campaign/Twitch Malt Drink Pineapple.jpg',
      '/Campaigns/Twitch Campaign/Twitch Malt Drink Pomegranate.jpg',
    ]
  },
  {
    id: 'nexura',
    title: 'Nexoura',
    description: 'A social media campaign focused on increasing awareness and engagement through clear communication and visually compelling content.',
    industry: 'Education',
    focus: 'Social Media Campaign',
    highlights: [
      'Campaign Consistency',
      'Information Hierarchy',
      'Visual Communication',
      'Lead Generation Content'
    ],
    image: '/Campaigns/Nexoura Campaigns/Campaign 1/Artboard.jpg',
    category: 'campaign',
    images: [
      '/Campaigns/Nexoura Campaigns/Campaign 1/Artboard 1.jpg',
      '/Campaigns/Nexoura Campaigns/Campaign 1/Artboard 2.jpg',
      '/Campaigns/Nexoura Campaigns/Campaign 1/Artboard 3.jpg',
      '/Campaigns/Nexoura Campaigns/Campaign 2/Artboard 1.jpg',
      '/Campaigns/Nexoura Campaigns/Campaign 2/Artboard 2.jpg',
      '/Campaigns/Nexoura Campaigns/Campaign 2/Artboard 3.jpg',
      '/Campaigns/Nexoura Campaigns/Campaign 2/Artboard 4.jpg',
    ]
  }
].map(p => ({
  ...p,
  image: getUrl(p.image),
  images: p.images?.map(getUrl)
}));

export const additionalWorkImages = [
  '/Additional work/Hamco post.jpg',
  '/Additional work/Helmy congratulations.jpg',
  '/Ai visuals/Toyota account/Post 2.jpg',
  '/Additional work/Sham El Nessim.jpg',
  '/Additional work/Ciao congratulations.jpg',
  '/Additional work/Carprogini congratulations.jpg',
  '/Ai visuals/Toyota account/Post 1.jpg',
  '/Additional work/Magic congratulations.jpg',
  '/Ai visuals/Toyota account/Toyota congratulations.jpg',
].map(getUrl);

export const aiVisuals = [

  {
    id: 'chevrolet',
    title: 'Chevrolet',
    description: 'Conceptual exploration using AI visuals for Chevrolet.',
    image: '/Ai visuals/Chevrolet test/Artboard 1.png',
    visuals: [
      '/Ai visuals/Chevrolet test/Artboard 1.png',
      '/Ai visuals/Chevrolet test/Artboard 2.png',
      '/Ai visuals/Chevrolet test/Artboard 3.jpg',
      '/Ai visuals/Chevrolet test/Artboard 4.png'
    ]
  },
  {
    id: 'carmour',
    title: 'Carmour',
    description: 'AI driven design systems for Carmour marketing.',
    image: '/Ai visuals/Carmour account/Post 1.jpg',
    visuals: [
      '/Ai visuals/Carmour account/Post 1.jpg',
      '/Ai visuals/Carmour account/Post 2.jpg',
      '/Ai visuals/Carmour account/Post 3.jpg',
      '/Ai visuals/Carmour account/Post 4.jpg',
      '/Ai visuals/Carmour account/Tow slids/Artboard 1.jpg',
      '/Ai visuals/Carmour account/Tow slids/Artboard 2.jpg'
    ]
  },
  {
    id: 'benzwa',
    title: 'Benzwa',
    description: 'AI visual generation and styling for Benzwa.',
    image: '/Ai visuals/Benzwa account/Post 1.jpg',
    visuals: [
      '/Ai visuals/Benzwa account/Benzway congratulations.jpg',
      '/Ai visuals/Benzwa account/Post 1.jpg',
      '/Ai visuals/Benzwa account/Post 2.jpg',
      '/Ai visuals/Benzwa account/Post 3.jpg',
      '/Ai visuals/Benzwa account/Post 4.jpg'
    ]
  },
  {
    id: 'ciao',
    title: 'Ciao',
    description: 'Experimental AI visuals for food and beverage brand exploration, pushing the boundaries of AI-driven creative art.',
    image: '/Ai visuals/Ciao account/Cover.jpg',
    visuals: [
      '/Ai visuals/Ciao account/Cover.jpg',
      '/Ai visuals/Ciao account/Banner.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 1/Artboard 1.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 1/Artboard 2.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 1/Artboard 3.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 1/Artboard 4.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 2/Artboard 1.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 2/Artboard 2.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 2/Artboard 3.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 2/Artboard 4.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 2/Artboard 5.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 3/Artboard 1.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 3/Artboard 2.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 3/Artboard 3.jpg',
      '/Ai visuals/Ciao account/Visuals/Visual 3/Artboard 4.jpg'
    ]
  },
  {
    id: 'toyota',
    title: 'Toyota',
    description: 'AI-driven automotive visual concepts, focusing on environment integration and material realism.',
    image: '/Ai visuals/Toyota account/Cover.jpg',
    visuals: [
      '/Ai visuals/Toyota account/Cover.jpg',
      '/Ai visuals/Toyota account/Carousel post/Artboard 1.jpg',
      '/Ai visuals/Toyota account/Carousel post/Artboard 2.jpg',
      '/Ai visuals/Toyota account/Carousel post/Artboard 3.jpg',
      '/Ai visuals/Toyota account/Carousel post/Artboard 5.jpg'
    ]
  }
].map(v => ({
  ...v,
  image: getUrl(v.image),
  visuals: v.visuals.map(getUrl)
}));

export const experience: Experience[] = [
  {
    role: 'Graphic Designer',
    company: 'Hand Mark Agency',
    description: 'Responsible for creating and managing visual content across multiple client brands, including social media campaigns, product advertising, promotional materials, and marketing assets.',
    tasks: [
      'Created social media campaigns and marketing assets',
      'Managed product advertising and promotional materials',
      'Worked closely with marketing teams to deliver creative solutions'
    ]
  }
];

export const skills = {
  design: [
    'Social Media Design',
    'Product Advertising',
    'Visual Identity',
    'Campaign Design',
    'Creative Direction',
    'Visual Communication'
  ],
  software: [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe After Effects'
  ]
};
