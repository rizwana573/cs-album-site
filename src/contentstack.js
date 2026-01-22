import Contentstack from "contentstack";

const Stack = Contentstack.Stack({
  api_key: import.meta.env.VITE_CS_API_KEY,
  delivery_token: import.meta.env.VITE_CS_DELIVERY_TOKEN,
  environment: import.meta.env.VITE_CS_ENVIRONMENT,
});

export default Stack;
