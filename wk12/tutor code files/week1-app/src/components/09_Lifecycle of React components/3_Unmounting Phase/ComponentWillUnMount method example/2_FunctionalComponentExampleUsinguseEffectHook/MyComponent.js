import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [isMounted, setIsMounted] = useState(true);
  
    useEffect(() => {
      return () => {
        setIsMounted(false);
      };
    }, []);
    if (!isMounted) {
        return null;
      }
    
      return (
        <div>
          <h1>My Component</h1>
        </div>
      );
    };
      
export default MyComponent;      