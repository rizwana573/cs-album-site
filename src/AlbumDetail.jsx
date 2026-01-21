import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stack from "./contentstack";

export default function AlbumDetail() {
  const { slug } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      const Query = Stack.ContentType("album")
        .Query()
        .where("slug", slug);

      const result = await Query.toJSON().find();
      setAlbum(result[0][0]);
    };

    fetchAlbum();
  }, [slug]);
 
  if (!album) return <p>Loading...</p>;

  return (
    <div>
      <h1>{album.title}</h1>
      <img src={album.cover_image.url} alt={album.title} width={300} />
      <p>Release Date: {album.release_date}</p>
      <a href={album.spotify_url} target="_blank">Spotify</a> | 
      <a href={album.youtube_url} target="_blank">YouTube</a>
    </div>
  );
}
