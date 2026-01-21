import Contentstack from "contentstack";

const Stack = Contentstack.Stack({
  api_key: "YOUR_API_KEY",
  delivery_token: "YOUR_DELIVERY_TOKEN",
  environment: "YOUR_ENVIRONMENT_NAME",
  live_preview: {
    enable: true,
    preview_token: "YOUR_PREVIEW_TOKEN",
    host: "rest-preview.contentstack.com"
  }
});

export default Stack;
