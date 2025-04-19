import { useState, useEffect } from 'react'
import './App.css'
import { BUSINESS_NAME, BUSINESS_SLOGAN, TOMATO_RED, BUSINESS_DESCRIPTION } from './constants';

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
      <div className="App flex flex-col items-center h-screen ">
        <h1 className="business-name text-4xl" data-style="text-4xl">{BUSINESS_NAME}</h1>
        <div className="card w-96 shadow-lg rounded-lg p-6 mt-8">
          <div className="text-xl mb-40">{BUSINESS_SLOGAN}</div>
          <div className="text-lg">
            <p className=''>{BUSINESS_DESCRIPTION}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
