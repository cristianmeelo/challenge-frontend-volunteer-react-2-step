import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center pt-28 font-manrope bg-light-bg text-orange-500">
      <span className="text-[36px]" aria-label="Nome do usuário">
        cristian melo.
      </span>
      <span className="text-custom-gray-80">
        coding by <strong>me</strong>
      </span>
    </footer>
  );
};

export default Footer;
