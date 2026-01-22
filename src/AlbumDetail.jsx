import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllAlbums } from "./contentstack";

const AlbumDetail = () => {
  const { slug } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        // Fetch all albums
        const albums = await fetchAllAlbums();

        // Find the album with matching slug
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
  }, [slug]);

  if (loading) return <h2>Loading...</h2>;
  if (!album) return <h2>No album found</h2>;

  return (
    <div>
      <h1>{album.title}</h1>
      <p>Release Date: {album.release_date}</p>
      <p>Label: {album.global_field.label}</p>
      <p>Artist: {album.global_field.artist_name}</p>
      <img src={album.cover_image?.url} alt={album.album_title} />
      <div>
        <a href={album.spotify.href} target="_blank">
          Listen on Spotify
        </a>
        <br />
        <a href={album.youtube.href} target="_blank">
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default AlbumDetail;
