import fetch from 'node-fetch';
import { XMLParser } from 'fast-xml-parser';

import { SITEMAP_URL } from './constants';


const Parser = new XMLParser();

export const crawler = async () => {
  const res = await fetch(SITEMAP_URL);

  const sitemap = await res.text();
  const convertedSitemap: Sitemap = Parser.parse(sitemap);

  const list = convertedSitemap.urlset.url
    .map(item => item.loc)
    .filter(item => item.includes('/stories'));

  return list;
};
