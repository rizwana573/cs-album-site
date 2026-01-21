
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stack from "./contentstack";

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const Query = Stack.ContentType("album").Query();
      const result = await Query.toJSON().find();
      setAlbums(result[0]);
    };
    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      {albums.map(album => (
        <div key={album.uid} style={{ marginBottom: '1rem' }}>
          <Link to={`/album/${album.slug}`}>{album.title}</Link>
        </div>
      ))}
    </div>
  );
}
