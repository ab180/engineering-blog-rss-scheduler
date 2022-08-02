import fs from 'fs/promises';
import RSS from 'rss';

import { FEED_CONFIG, PATH } from './constants';


const Feed = new RSS(FEED_CONFIG);

export const createRss = async (posts: Post[]) => {
  const sortedList = [...posts].sort((a, b) => (
    b.date.localeCompare(a.date)
  ));

  sortedList.forEach(({ cover, ...post }) => {
    Feed.item({
      ...post,
      enclosure: {
        url: cover,
        type: cover.includes('.jpg') ? 'image/jpg' : 'image/png',
      },
    });
  });

  const xml = Feed.xml({ indent: true });
  await fs.writeFile(PATH.RSS, xml);

  return xml;
};
