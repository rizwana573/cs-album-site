import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllAlbums } from "./contentstack";

const AlbumDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  // Detect live preview query param
  const isPreview =
    new URLSearchParams(location.search).get("live_preview") === "true";

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const albums = await fetchAllAlbums(isPreview);
        const matched = albums.find((item) => item.slug === slug);
        setAlbum(matched || null);
      } catch (err) {
        console.error("Error fetching album:", err);
        setAlbum(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [slug, isPreview]);

  if (loading) return <h2>Loading...</h2>;
  if (!album) return <h2>No album found</h2>;

  return (
    <div>
      <h1>{album.album_title}</h1>
      <p>Release Date: {album.release_date}</p>
      <p>Label: {album.label}</p>
      <p>Artist: {album.artist_name}</p>
      <img src={album.cover_image?.url} alt={album.album_title} />
      <div>
        <a href={album.spotify_link} target="_blank">
          Listen on Spotify
        </a>
        <br />
        <a href={album.youtube_link} target="_blank">
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default AlbumDetail;
