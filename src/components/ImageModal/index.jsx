import React from 'react';

// Componente Modal para exibir detalhes da imagem
const ImageModal = ({ image, onClose }) => {
  if (!image) return null; // Retorna null se não houver imagem selecionada

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-4">{image.author}</h2>
        <img
          src={image.download_url}
          alt={image.author}
          className="w-full h-auto mb-4"
        />
        <p>
          Dimensões: {image.width} x {image.height}
        </p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose} // Fecha o modal
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
