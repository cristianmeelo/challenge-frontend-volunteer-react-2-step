import { useState } from 'react';

const Button = ({
  onClick,
  children,
  variant = 'default',
  disabled = false,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const baseStyles =
    'px-4 py-2 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-300';

  const variantStyles = {
    default:
      'bg-orange-500 text-white hover:bg-orange-600 active:bg-red-500 shadow focus:ring-orange-300',
    secondary:
      'bg-gray-300 text-gray-800 hover:bg-gray-400 active:bg-red-500 shadow focus:ring-red-300',
  };

  const disabledStyles =
    'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50';

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`${baseStyles} ${variantStyles[variant]} ${
        isPressed ? 'scale-95 opacity-75' : 'scale-100 opacity-100'
      } ${disabled ? disabledStyles : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
