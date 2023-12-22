const paths = {
  home() {
    return "/";
  },
  topicShow(topicSlug: String) {
    return `/topics/${topicSlug}`;
  },
  postCreate(topicSlug: String) {
    return `/topics/${topicSlug}/posts/new`;
  },
  postShow(topicSlug: String, postId: String) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
};

export { paths as appPaths };
