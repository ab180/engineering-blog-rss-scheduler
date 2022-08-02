import path from 'path';


const dirname = path.resolve(path.dirname(''));

export const PATH = {
  RSS: path.resolve(dirname, './rss.xml'),
};


export const SITEMAP_URL = 'https://engineering.ab180.co/sitemap.xml';

export const FEED_CONFIG = {
  title: 'AB180 Engineering Base',
  description: '에어브릿지를 만드는 개발자들의 경험과 기록을 꾸준히 기록하는 공간입니다',
  feed_url: '',
  site_url: 'https://engineering.ab180.co',
  managingEditor: 'engineering-blog@ab180.co',
  copyright: 'Copyright 2015- AB180 Inc. All rights reserved.',
};


export const POST_TEMPLATE: Post & { github: string } = {
  url: '',
  title: '',
  description: '',
  author: '',
  cover: '',
  date: '',
  github: '',
};

export const HEADER_PARSER = [
  {
    from: 'og:title',
    to: 'title' as const,
  },
  {
    from: 'og:description',
    to: 'description' as const,
  },
  {
    from: 'article:author',
    to: 'github' as const,
  },
  {
    from: 'author',
    to: 'author' as const,
  },
  {
    from: 'og:image',
    to: 'cover' as const,
  },
];
