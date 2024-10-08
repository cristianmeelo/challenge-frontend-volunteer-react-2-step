import React, { useState, useEffect } from 'react';
import ImageDisplay from './components/ImageDisplay';
import ImageModal from './components/ImageModal';
import SearchInput from './components/SearchInput';

const App = () => {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const addFavorite = (image) => {
    setFavorites([...favorites, image]);
  };

  const filteredImages = images.filter((image) =>
    image.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="px-80">
      <div className="pt-32 w-1/2">
        <span className="text-4xl font-bold">Faksplash</span>
        <h1 className="text-lg">
          Source of visual resources from the internet.
        </h1>
        <p className="text-lg pb-8">Provided by picsum API.</p>
        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Buscar por autor..."
        />
      </div>

      <div className="flex flex-col pt-32">
        {filteredImages.map((image) => (
          <ImageDisplay
            key={image.id}
            image={image}
            onFavorite={addFavorite}
            onClick={openModal}
          />
        ))}
      </div>

      <ImageModal image={selectedImage} onClose={closeModal} />
    </main>
  );
};

export default App;
