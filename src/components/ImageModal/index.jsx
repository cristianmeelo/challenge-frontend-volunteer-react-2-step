const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full transition-transform transform scale-100 opacity-100">
        <h2 className="text-2xl font-semibold mb-4">{image.author}</h2>
        <img
          src={image.download_url}
          alt={image.author}
          className="w-full h-auto rounded-lg mb-4"
        />
        <p className="text-gray-600">
          Dimensões: {image.width} x {image.height}
        </p>
        <button
          className="mt-6 bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-600"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
