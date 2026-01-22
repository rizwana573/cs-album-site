const API_KEY = import.meta.env.VITE_CS_API_KEY;
const DELIVERY_TOKEN = import.meta.env.VITE_CS_DELIVERY_TOKEN;
const ENVIRONMENT = import.meta.env.VITE_CS_ENVIRONMENT;

const BASE_URL = `https://cdn.contentstack.io/v3/content_types`;

export const fetchAlbumBySlug = async (slug) => {
  try {
    const res = await fetch(
      `${BASE_URL}/album/entries?environment=${ENVIRONMENT}&query=${encodeURIComponent(
        JSON.stringify({ slug })
      )}`,
      {
        headers: {
          api_key: API_KEY,
          access_token: DELIVERY_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log("Album by slug response:", data);  // debug
    return data.entries?.[0] || null;
  } catch (err) {
    console.error("Contentstack fetch error:", err);
    return null;
  }
};

// NEW FUNCTION: fetch all albums
export const fetchAllAlbums = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/album/entries?environment=${ENVIRONMENT}`,
      {
        headers: {
          api_key: API_KEY,
          access_token: DELIVERY_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log("All albums response:", data);  // debug
    return data.entries || [];
  } catch (err) {
    console.error("Contentstack fetch all albums error:", err);
    return [];
  }
};
