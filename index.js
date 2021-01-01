import 'dotenv/config.js';
import _ from 'lodash';
import {Indiekit} from '@indiekit/indiekit';
import {JekyllPreset} from '@indiekit/preset-jekyll';
import {GithubStore} from '@indiekit/store-github';
import {InternetArchiveSyndicator} from '@indiekit/syndicator-internet-archive';
import {TwitterSyndicator} from '@indiekit/syndicator-twitter';

// New indiekit instance
const indiekit = new Indiekit();

// Configire publication preset
const jekyll = new JekyllPreset();

// Configure content store
const github = new GithubStore({
  user: 'paulrobertlloyd',
  repo: 'paulrobertlloyd-v4',
  branch: 'main',
  token: process.env.GITHUB_TOKEN
});

// Configure Internet Archive syndicator
const internetArchive = new InternetArchiveSyndicator({
  checked: true,
  forced: true,
  accessKey: process.env.ARCHIVE_ACCESS_KEY,
  secret: process.env.ARCHIVE_SECRET
});

// Configure Twitter syndicator
const twitter = new TwitterSyndicator({
  checked: true,
  forced: true,
  user: 'paulrobertlloyd',
  apiKey: process.env.TWITTER_API_KEY,
  apiKeySecret: process.env.TWITTER_API_KEY_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const postTypes = [{
  type: 'article',
  name: 'Article',
  post: {
    path: 'src/content/articles/{yyyy}-{MM}-{dd}-{slug}.md',
    url: '{yyyy}/{MM}/{slug}/'
  },
  media: {
    path: 'src/images/{yyyy}/{MM}/{filename}',
    url: 'images/{yyyy}/{MM}/{filename}'
  }
}, {
  type: 'note',
  name: 'Note',
  post: {
    path: 'src/content/notes/{t}.md',
    url: 'notes/{t}/'
  }
}, {
  type: 'photo',
  name: 'Photo',
  post: {
    path: 'src/content/photos/{t}.md',
    url: 'photos/{t}/'
  },
  media: {
    path: 'src/images/photos/{t}.{ext}',
    url: 'images/photos/{t}.{ext}'
  }
}, {
  type: 'bookmark',
  name: 'Bookmark',
  post: {
    path: 'src/content/bookmarks/{yyyy}-{MM}-{dd}-{slug}.md',
    url: 'bookmarks/{yyyy}/{MM}/{slug}/'
  }
}, {
  type: 'event',
  name: 'Event',
  post: {
    path: 'src/content/events/{yyyy}-{MM}-{dd}-{slug}.md',
    url: 'events/{yyyy}/{MM}/{slug}/'
  }
}, {
  type: 'rsvp',
  name: 'Reply with RSVP',
  post: {
    path: 'src/content/replies/{t}.md',
    url: 'replies/{t}/'
  }
}, {
  type: 'reply',
  name: 'Reply',
  post: {
    path: 'src/content/replies/{t}.md',
    url: 'replies/{t}/'
  }
}];

const storeMessageTemplate = metaData => {
  const {result, postType, fileType} = metaData;
  return `${_.upperFirst(result)} a ${postType} ${fileType}`;
};

// Application settings
indiekit.set('application.mongodbUrl', process.env.MONGODB_URL)

// Publication settings
indiekit.set('publication.categories', 'https://paulrobertlloyd.com/categories/index.json');
indiekit.set('publication.jf2Feed', 'https://paulrobertlloyd.com/feed.jf2');
indiekit.set('publication.locale', 'en-GB');
indiekit.set('publication.me', 'https://paulrobertlloyd.com');
indiekit.set('publication.postTypes', postTypes);
indiekit.set('publication.preset', jekyll);
indiekit.set('publication.slugSeparator', '_');
indiekit.set('publication.store', github);
indiekit.set('publication.storeMessageTemplate', storeMessageTemplate);
indiekit.set('publication.syndicationTargets', [
  internetArchive,
  twitter
]);
indiekit.set('publication.timeZone', 'Europe/London');

// Server
const server = indiekit.server();

export default server;
