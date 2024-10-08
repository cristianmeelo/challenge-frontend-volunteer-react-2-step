import React from 'react';
import Button from '../Button'; // Importe o novo componente de botão

// Componente ImageDisplay para exibir a imagem
const ImageDisplay = ({ image, onFavorite, onClick }) => {
  return (
    <div className="relative group mb-4">
      <img
        src={image.download_url}
        alt={image.author}
        loading="lazy" // Lazy loading da imagem
        className="w-full h-16 object-cover rounded-lg cursor-pointer transition-transform duration-200 ease-in-out transform group-hover:scale-105" // Altura ajustada
        onClick={() => onClick(image)}
      />
      <Button
        onClick={(e) => {
          e.stopPropagation(); // Impede que o clique no botão feche o modal
          onFavorite(image);
        }}
        variant="default" // Você pode usar 'secondary' ou criar outras variantes
      >
        Favoritar
      </Button>
    </div>
  );
};

export default ImageDisplay;
