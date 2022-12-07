module.exports = {
  application: {
    url: "https://kit.paulrobertlloyd.com",
    mongodbUrl: process.env.MONGO_URL,
  },
  plugins: [
    "@indiekit/endpoint-json-feed",
    "@indiekit/preset-jekyll",
    "@indiekit/store-github",
    "@indiekit/syndicator-internet-archive",
    "@indiekit/syndicator-mastodon",
    "@indiekit/syndicator-twitter",
  ],
  publication: {
    categories: "https://paulrobertlloyd.com/categories/index.json",
    locale: "en-GB",
    me: "https://paulrobertlloyd.com",
    postTypes: [{
      type: "article",
      name: "Article",
      post: {
        path: "src/articles/{yyyy}/{MM}/{slug}/index.md",
        url: "{yyyy}/{MM}/{slug}/"
      },
      media: {
        path: "src/articles/{yyyy}/{MM}/{slug}/{filename}",
        url: "{yyyy}/{MM}/{slug}/{filename}"
      }
    }, {
      type: "note",
      name: "Note",
      post: {
        path: "src/notes/{t}.md",
        url: "notes/{t}/"
      }
    }, {
      type: "photo",
      name: "Photo",
      post: {
        path: "src/photos/{t}.md",
        url: "photos/{t}/"
      },
      media: {
        path: "src/media/{t}.{ext}",
        url: "media/{t}.{ext}"
      }
    }, {
      type: "bookmark",
      name: "Bookmark",
      post: {
        path: "src/bookmarks/{yyyy}-{MM}-{dd}-{slug}.md",
        url: "bookmarks/{yyyy}/{MM}/{slug}/"
      }
    }, {
      type: "reply",
      name: "Reply",
      post: {
        path: "src/replies/{t}.md",
        url: "replies/{t}/"
      }
    }],
    slugSeparator: "_",
    timeZone: "Europe/London",
  },
  "@indiekit/store-github": {
    user: "paulrobertlloyd",
    repo: "paulrobertlloyd-v4"
  },
  "@indiekit/syndicator-internet-archive": {
    checked: true,
    forced: true,
  },
  "@indiekit/syndicator-mastodon": {
    checked: true,
    forced: true,
    url: "https://mastodon.social",
    user: "paulrobertlloyd",
  },
  "@indiekit/syndicator-twitter": {
    checked: true,
    forced: true,
    user: "paulrobertlloyd",
  },
};
