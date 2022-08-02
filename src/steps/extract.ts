import fetch from 'node-fetch';
import { load } from 'cheerio';

import { HEADER_PARSER, POST_TEMPLATE } from './constants';


export const extract = async (url: string) => {
  const res = await fetch(url);
  const body = await res.text();

  const $ = load(body);
  const result = { ...POST_TEMPLATE, url };

  $('meta').each((_, { attribs }) => {
    HEADER_PARSER.forEach(({ from, to }) => {
      const attributes = [attribs.property, attribs.name];

      if (attributes.includes(from)) {
        result[to] = attribs.content;
      }
    });
  });

  // start_at: YYYY-MM-DD
  const [date] = $('#__NEXT_DATA__').text().match(/"\d{4}-\d{2}-\d{2}"/) || [];
  if (date) {
    result.date = `${date.replace(/"/g, '')}T00:00:00+09:00`;
  }

  const { github, ...data } = result;
  const payload: Post = {
    ...data,
    author: `${data.author} (${github})`,
  };

  return payload;
};
