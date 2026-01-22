const API_KEY = import.meta.env.VITE_CS_API_KEY;
const DELIVERY_TOKEN = import.meta.env.VITE_CS_DELIVERY_TOKEN;
const PREVIEW_TOKEN = import.meta.env.VITE_CS_PREVIEW_TOKEN;
const ENVIRONMENT = import.meta.env.VITE_CS_ENVIRONMENT;

const BASE_URL = `https://cdn.contentstack.io/v3/content_types`;

// Fetch a single album by slug
export const fetchAlbumBySlug = async (slug, preview = false) => {
  try {
    const token = preview ? PREVIEW_TOKEN : DELIVERY_TOKEN;

    const res = await fetch(
      `${BASE_URL}/album/entries?environment=${ENVIRONMENT}&query=${encodeURIComponent(
        JSON.stringify({ slug })
      )}`,
      {
        headers: {
          api_key: API_KEY,
          access_token: token,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log("Live Preview fetch response:", data);
    return data.entries?.[0] || null;
  } catch (err) {
    console.error("Contentstack fetch error:", err);
    return null;
  }
};

// Fetch all albums (optional, for listing)
export const fetchAllAlbums = async (preview = false) => {
  try {
    const token = preview ? PREVIEW_TOKEN : DELIVERY_TOKEN;

    const res = await fetch(
      `${BASE_URL}/album/entries?environment=${ENVIRONMENT}`,
      {
        headers: {
          api_key: API_KEY,
          access_token: token,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    return data.entries || [];
  } catch (err) {
    console.error("Contentstack fetch all albums error:", err);
    return [];
  }
};
