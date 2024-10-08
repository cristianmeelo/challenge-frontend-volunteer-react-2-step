// src/App.js
import React, { useState, useEffect } from 'react';
import ImageDisplay from './components/ImageDisplay';
import ImageModal from './components/ImageModal';
import SearchInput from './components/SearchInput';
import { useSelector } from 'react-redux';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false); // Estado para controlar a exibição dos favoritos

  const favorites = useSelector((state) => state.favorites); // Seleciona os favoritos do Redux

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error('Failed to fetch images', err));
  }, []);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const filteredImages = images.filter((image) =>
    image.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <main className="px-80">
      <div className="pt-32 w-2/3">
        <span className="text-4xl font-bold">Faksplash</span>
        <h1 className="text-lg">
          Source of visual resources from the internet.
        </h1>
        <p className="text-lg pb-8">Provided by Picsum API.</p>
        <div className="flex items-center space-x-2">
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeholder="Search..."
          />
          <button
            onClick={handleShowFavorites}
            className="flex items-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            {showFavorites ? '🔙 See all' : '💖 See fav'}
          </button>
        </div>
      </div>

      <div className="pt-32">
        <ImageDisplay
          images={showFavorites ? favorites : filteredImages}
          onClick={openModal}
        />
      </div>

      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </main>
  );
};

export default App;
