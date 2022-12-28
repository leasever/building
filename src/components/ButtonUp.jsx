import { useState } from 'react';

export default function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);

  window.onscroll = () => {
    document.documentElement.scrollTop > 700
      ? setIsVisible(true)
      : setIsVisible(false);
  };
  const handleToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        className={`button_up ${!isVisible ? ' ' : 'active_up'}`}
        onClick={handleToUp}
        title="Ir al inicio"
      >
        <div className='arrow-right icon'></div>
      </div>
    </>
  );
}
