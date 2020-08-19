import 'dotenv/config.js';
import {Indiekit} from '@indiekit/indiekit';
import {GithubStore} from '@indiekit/store-github';

// New indiekit instance
const indiekit = new Indiekit();

// Configure content store
const githubStore = new GithubStore({
  user: 'paulrobertlloyd',
  repo: 'paulrobertlloyd-v4',
  branch: 'main',
  token: process.env.GITHUB_TOKEN
});

const publicationConfig = {
  categories: {
    url: 'https://paulrobertlloyd.com/categories/index.json'
  },
  'post-types': [{
    type: 'article',
    name: 'Article',
    post: {
      path: 'src/content/articles/{yyyy}-{MM}-{dd}-{slug}.md',
      url: '{yyyy}/{MM}/{slug}/'
    },
    media: {
      path: 'src/images/{yyyy}/{MM}/{filename}'
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
      path: 'src/images/photos/{t}.{ext}'
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
  }],
  'slug-separator': '_',
  'syndicate-to': [{
    uid: 'https://twitter.com/paulrobertlloyd/',
    name: '@paulrobertlloyd on Twitter'
  }, {
    uid: 'https://mastodon.social/@paulrobertlloyd',
    name: '@paulrobertlloyd on Mastodon'
  }, {
    uid: 'https://micro.blog/paulrobertlloyd',
    name: '@paulrobertlloyd on Micro.blog'
  }]
}

// Register extensions
indiekit.addStore(githubStore);

// Application settings
indiekit.set('application.locale', 'en-GB');

// Publication settings
indiekit.set('publication.config', publicationConfig);
indiekit.set('publication.me', 'https://paulrobertlloyd.com');
indiekit.set('publication.storeId', 'github');

// Server
const server = indiekit.server();

export default server;
