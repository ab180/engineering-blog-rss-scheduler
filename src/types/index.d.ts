type Sitemap = {
  urlset: {
    url: {
      loc: string;
      changefreq: 'daily';
    }[];
  };
};


type Post = {
  /**
   * URL of the post.
   *
   * @example https://engineering.ab180.co/stories/webpack-to-vite
   */
  url: string;
  /**
   * title of the post.
   * this value comes from `og:title` in `<head>` tag.
   */
  title: string;
  /**
   * description of the post.
   * this value comes from `og:description` in `<head>` tag.
   */
  description: string;
  /**
   * author of the post.
   * this value combines `article:author` for GitHub,
   * and `author` for the name of writer.
   *
   * @example Chanhee Lee (https://github.com/hiddenest)
   */
  author: string;
  /**
   * the URL of cover image of the post.
   */
  cover: string;
  /**
   * the date that post has been published.
   * the format follows ISO 8601 datetime foramt.
   * 
   * @example 2022-07-31T00:00:00+09:00
   */
  date: string;
};
