import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/features';

const ImageDisplay = ({ images, onClick }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleFavorite = (image) => {
    if (favorites.find((fav) => fav.id === image.id)) {
      dispatch(removeFavorite(image));
    } else {
      dispatch(addFavorite(image));
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image) => {
        const isFavorite = favorites.includes(image);
        return (
          <div key={image.id} className="relative group mb-4">
            <img
              src={image.download_url}
              alt={image.author}
              loading="lazy"
              className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform duration-200 ease-in-out transform group-hover:scale-105"
              onClick={() => onClick(image)}
            />
            <div
              className="absolute top-2 right-2 bg-white bg-opacity-75 p-1 rounded-full transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                handleFavorite(image);
              }}
            >
              {isFavorite ? (
                <AiFillHeart className="text-red-500 w-6 h-6 " />
              ) : (
                <AiOutlineHeart className="text-gray-500 w-6 h-6 hover:text-gray-700 animate-pulse" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageDisplay;
