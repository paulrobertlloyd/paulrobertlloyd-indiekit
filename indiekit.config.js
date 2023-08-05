export default {
  application: {
    mongodbUrl: process.env.MONGO_URL,
    timeZone: "Europe/London",
    url: "https://kit.paulrobertlloyd.com",
  },
  plugins: [
    "@indiekit/endpoint-json-feed",
    "@indiekit/preset-jekyll",
    "@indiekit/store-github",
    "@indiekit/syndicator-internet-archive",
    "@indiekit/syndicator-mastodon",
  ],
  publication: {
    categories: "https://paulrobertlloyd.com/categories/index.json",
    locale: "en-GB",
    me: "https://paulrobertlloyd.com",
    postTypes: [
      {
        type: "article",
        name: "Article",
        post: {
          path: "articles/{yyyy}-{MM}-{dd}-{slug}.markdown",
          url: "{yyyy}/{DDD}/a{n}/{slug}/",
        },
        media: {
          path: "media/{yyyy}/{DDD}/a{n}/{filename}",
          url: "{yyyy}/{DDD}/a{n}/{filename}",
        },
      },
      {
        type: "note",
        name: "Note",
        post: {
          path: "notes/{yyyy}-{MM}-{dd}-{n}.markdown",
          url: "{yyyy}/{DDD}/n{n}/",
        },
      },
      {
        type: "photo",
        name: "Photo",
        post: {
          path: "photos/{yyyy}-{MM}-{dd}-{n}.markdown",
          url: "{yyyy}/{DDD}/p{n}/",
        },
        media: {
          path: "media/{yyyy}/{DDD}/p{n}/{filename}",
          url: "{yyyy}/{DDD}/p{n}/{filename}",
        },
      },
      {
        type: "bookmark",
        name: "Bookmark",
        post: {
          path: "bookmarks/{yyyy}-{MM}-{dd}-{slug}.markdown",
          url: "{yyyy}/{DDD}/b{n}/{slug}/",
        },
      },
      {
        type: "reply",
        name: "Reply",
        post: {
          path: "replies/{yyyy}-{MM}-{dd}-{n}.markdown",
          url: "{yyyy}/{DDD}/r{n}/",
        },
      },
    ],
    slugSeparator: "_",
  },
  "@indiekit/store-github": {
    user: "paulrobertlloyd",
    repo: "paulrobertlloyd-content",
  },
  "@indiekit/syndicator-mastodon": {
    checked: true,
    url: "https://mastodon.social",
    user: "paulrobertlloyd",
  },
};
