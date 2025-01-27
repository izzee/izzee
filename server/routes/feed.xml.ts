import RSS from 'rss';
import { serverQueryContent } from '#content/server'
export default defineEventHandler(async (event) => {

  const config = useAppConfig()
  const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find()
  const posts = docs.filter((doc) => doc?._path?.includes('/feed'))

  const feed = new RSS({
    title: config.info.title,
    site_url: `${config.info.site_url}`,
    feed_url: `${config.info.site_url}/feed.xml`,
  });
  for (const post of posts) {
    feed.item({
      title: post.title ?? '-',
      url: `${config.info.site_url}${post._path}`,
      date: post.date,
      description: post.description ?? '-',
    });
  }
  const feedString = feed.xml({ indent: true });

  event.node.res.setHeader('content-type', 'text/xml');
  event.node.res.end(feedString);

});
