import ContentstackLivePreview from "@contentstack/live-preview-utils";

ContentstackLivePreview.init({
  enable: true,
  stackDetails: {
    apiKey: import.meta.env.VITE_CS_API_KEY,
  },
});
