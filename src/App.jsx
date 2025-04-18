import { useState, useEffect } from 'react'
import './App.css'
import { BUSINESS_NAME, TOMATO_RED } from './constants';

function App() {
  const [count, setCount] = useState(0);
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const animateText = () => {
      const businessName = document.querySelector('.business-name');
      businessName.textContent = BUSINESS_NAME;
      const text = BUSINESS_NAME;
      businessName.innerHTML = '';

      if (!businessName) return;

      const spans = text.split('').map((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.transition = 'color 0.5s';
        span.style.color = 'white';
        businessName.appendChild(span);
        return span;
      });

      spans.forEach((span, index) => {
        setTimeout(() => {
          span.style.color = 'var(--tomato-red)';

          if (index === spans.length - 1) {
            setTimeout(() => {
              spans.forEach((s, i) => {
                setTimeout(() => {
                  s.style.color = 'white';
                }, i * 500);
              });
            }, 500);
          }
        }, index * 500);
      });
    };

    animateText();
    const interval = setInterval(animateText, 500 * BUSINESS_NAME.length * 2 + 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <h1 className="business-name text-4xl" data-style="text-4xl">{BUSINESS_NAME}</h1>
        <div className="card">
          
        </div>
        {showElement && (
          <div className="sliding-element">This is a new element!</div>
        )}
      </div>
    </div>
  )
}

export default App
