import { useState } from 'react';

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isVisible && <p>Hello world!</p>}
    </div>
  );
}

export default Toggle;