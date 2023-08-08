import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "./Image";
import Footer from "./Footer";

function Home() {
  const [offset, setOffset] = useState(0);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dataUrl = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`;
      const res = await fetch(dataUrl);
      const data = await res.json();
      setImageData(data.photos);
    }

    fetchData();

  }, [offset]);



  return (
    <div>
      <div className="gallery">
        {imageData?.map((image, index) => {
          return (
            <Image
              key={index}
              url={image.url}
              title={image.title}
              description={image.description}
            />
          );
        })}
      </div>
      <Footer offset={offset} setOffset={setOffset} />
    </div>
  );
}

export default Home;
