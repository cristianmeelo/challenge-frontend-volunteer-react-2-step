import React from 'react';

// Componente Button para estilização consistente
const Button = ({ onClick, children, variant = 'default' }) => {
  const baseStyles =
    'px-4 py-2 rounded transition-colors duration-200 ease-in-out focus:outline-none focus:ring';
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 shadow',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400 shadow',
    // Adicione mais variantes conforme necessário
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
