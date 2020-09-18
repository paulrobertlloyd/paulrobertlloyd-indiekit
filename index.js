import 'dotenv/config.js';
import {upperFirst} from 'lodash.upperfirst';
import {Indiekit} from '@indiekit/indiekit';
import {JekyllPreset} from '@indiekit/preset-jekyll';
import {GithubStore} from '@indiekit/store-github';

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
  return `${upperFirst(result)} a ${postType} ${fileType}`;
}

const syndicationTargets =  [{
  uid: 'https://twitter.com/paulrobertlloyd/',
  name: '@paulrobertlloyd on Twitter'
}, {
  uid: 'https://mastodon.social/@paulrobertlloyd',
  name: '@paulrobertlloyd on Mastodon'
}, {
  uid: 'https://micro.blog/paulrobertlloyd',
  name: '@paulrobertlloyd on Micro.blog'
}];

// Application settings
indiekit.set('application.mongodbUrl', process.env.MONGODB_URL)

// Publication settings
indiekit.set('publication.categories', 'https://paulrobertlloyd.com/categories/index.json');
indiekit.set('publication.locale', 'en-GB');
indiekit.set('publication.me', 'https://paulrobertlloyd.com');
indiekit.set('publication.postTypes', postTypes);
indiekit.set('publication.preset', jekyll);
indiekit.set('publication.slugSeparator', '_');
indiekit.set('publication.store', github);
indiekit.set('publication.storeMessageTemplate', storeMessageTemplate);
indiekit.set('publication.syndicationTargets', syndicationTargets);
indiekit.set('publication.timeZone', 'Europe/London');

// Server
const server = indiekit.server();

export default server;
