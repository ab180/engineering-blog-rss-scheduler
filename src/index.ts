import * as steps from './steps';


const runner = async () => {
  const list = await steps.crawler();
  const posts = await Promise.all(list.map(url => steps.extract(url)));

  const rss = await steps.createRss(posts);
  console.log(rss);
};

runner();
