import { tagInputSanitizer } from "@indiekit/frontend";

export default class TagsInput {
  constructor() {
    this.name = "Tags Input";
  }

  get validationSchemas() {
    return {
      tags: {
        exists: { if: (value, { req }) => req.body?.tags },
        tagInput: tagInputSanitizer,
        isArray: true,
      },
    };
  }

  init(Indiekit) {
    Indiekit.addPostType(false, this);
  }
}
