import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { filterImages } from './store/features/filter';
import ImageDisplay from './components/ImageDisplay';
import ImageModal from './components/ImageModal';
import Filter from './components/Filter';
import Footer from './components/Footer';

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const favorites = useSelector((state) => state.favorites);
  const { author } = useSelector((state) => state.filter);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((res) => res.json())
      .then((data) => {
        const modifiedData = data.map((image) => ({
          ...image,
          author: image.author,
        }));
        setImages(modifiedData);
      })
      .catch((err) => console.error('Failed to fetch images', err));
  }, []);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const filteredImages = filterImages(showFavorites ? favorites : images, {
    author,
  });

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const uniqueAuthors = [...new Set(images.map((image) => image.author))];

  return (
    <main className="px-4 md:px-20 lg:px-32 xl:px-80">
      <div className="pt-16 md:pt-32 w-full mx-auto">
        <span className="text-3xl md:text-4xl font-bold">Faksplash</span>
        <h1 className="text-md md:text-lg">
          Source of visual resources from the internet.
        </h1>
        <p className="text-md md:text-lg pb-8">Provided by Picsum API.</p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2">
          <Filter
            handleShowFavorites={handleShowFavorites}
            showFavorites={showFavorites}
            authors={uniqueAuthors}
          />
        </div>
      </div>

      <div className="pt-16 md:pt-32">
        <ImageDisplay images={filteredImages} onClick={openModal} />
      </div>

      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
      <Footer />
    </main>
  );
};

export default App;
