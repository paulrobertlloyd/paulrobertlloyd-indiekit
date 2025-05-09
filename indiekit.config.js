import process from "node:process";

export default {
  application: {
    locale: "en-GB",
    mongodbUrl: process.env.MONGO_URL,
    timeZone: process.env.TZ,
    url: "https://kit.paulrobertlloyd.com",
  },
  plugins: [
    "@indiekit/endpoint-json-feed",
    "@indiekit/endpoint-webmention-io",
    "@indiekit/post-type-jam",
    "@indiekit/preset-eleventy",
    "@indiekit/store-github",
    "@indiekit/syndicator-bluesky",
    "@indiekit/syndicator-internet-archive",
    "@indiekit/syndicator-mastodon",
    "@paulrobertlloyd/color-input",
    "@paulrobertlloyd/tags-input",
  ],
  publication: {
    locale: "en-GB",
    me: "https://paulrobertlloyd.com",
    postTypes: {
      article: {
        post: {
          path: "articles/{yyyy}-{MM}-{dd}-{slug}.markdown",
          url: "{yyyy}/{DDD}/a{n}/{slug}/",
        },
        media: {
          path: "media/{yyyy}/{DDD}/a{n}/{filename}",
          url: "media/{yyyy}/{DDD}/a{n}/{filename}",
        },
      },
      jam: {
        post: {
          path: "jams/{yyyy}-{MM}-{dd}-{n}.markdown",
          url: "{yyyy}/{DDD}/j{n}/",
        },
      },
      note: {
        post: {
          path: "notes/{yyyy}-{MM}-{dd}-{n}.markdown",
          url: "{yyyy}/{DDD}/n{n}/",
        },
      },
      photo: {
        post: {
          path: "photos/{yyyy}-{MM}-{dd}-{n}.markdown",
          url: "{yyyy}/{DDD}/p{n}/",
        },
        media: {
          path: "media/{yyyy}/{DDD}/p{n}/{filename}",
          url: "media/{yyyy}/{DDD}/p{n}/{filename}",
        },
      },
      bookmark: {
        post: {
          path: "bookmarks/{yyyy}-{MM}-{dd}-{slug}.markdown",
          url: "{yyyy}/{DDD}/b{n}/{slug}/",
        },
      },
      reply: {
        post: {
          path: "replies/{yyyy}-{MM}-{dd}-{n}.markdown",
          url: "{yyyy}/{DDD}/r{n}/",
        },
      },
    },
    slugSeparator: "_",
  },
  "@indiekit/endpoint-media": {
    imageProcessing: {
      resize: {
        width: 2400,
        height: 2400,
      },
    },
  },
  "@indiekit/store-github": {
    user: "paulrobertlloyd",
    repo: "paulrobertlloyd-content",
  },
  "@indiekit/post-type-article": {
    fields: {
      name: { required: true },
      content: { required: true },
      summary: {},
      category: {},
      tags: {},
      location: {},
      color: {},
      "post-status": {},
      published: { required: true },
      visibility: {},
    },
  },
  "@indiekit/post-type-photo": {
    fields: {
      photo: { required: true },
      content: {},
      tags: {},
      category: {},
      "post-status": {},
      "mp-photo-alt": { required: true },
      published: { required: true },
      visibility: {},
    },
  },
  "@indiekit/syndicator-bluesky": {
    checked: true,
    handle: "paulrobertlloyd.com",
  },
  "@indiekit/syndicator-mastodon": {
    checked: true,
    url: "https://mastodon.social",
    user: "paulrobertlloyd",
  },
};
