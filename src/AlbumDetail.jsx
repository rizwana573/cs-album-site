import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import contentstack from "./contentstack";

const AlbumDetail = () => {
  const { slug } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("Slug from URL:", slug);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        console.log("Fetching album for slug:", slug);

        const Query = contentstack
          .ContentType("album")
          .Entry()
          .query({ slug });

        const result = await Query.find();

        console.log("API response:", result);

        setAlbum(result[0][0]);
      } catch (error) {
        console.error("Contentstack error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [slug]);

  if (loading) return <h2>Loading...</h2>;
  if (!album) return <h2>No album found</h2>;

  return <h1>{album.album_title}</h1>;
};

export default AlbumDetail;
