import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const animateText = () => {
      const businessName = document.querySelector('.business-name');
      const text = businessName.textContent;
      businessName.innerHTML = '';

      const spans = text.split('').map((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.transition = 'color 1s';
        span.style.color = 'white';
        businessName.appendChild(span);
        return span;
      });

      spans.forEach((span, index) => {
        setTimeout(() => {
          span.style.color = 'red';

          if (index === spans.length - 1) {
            setTimeout(() => {
              spans.forEach((s, i) => {
                setTimeout(() => {
                  s.style.color = 'white';
                }, i * 1000);
              });
            }, 1000);
          }
        }, index * 1000);
      });
    };

    animateText();
    const interval = setInterval(animateText, 1000 * document.querySelector('.business-name').textContent.length * 2 + 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <h1 className="business-name">Definition Fitness</h1>
        <div className="card">
          
        </div>
        
      </div>
    </div>
  )
}

export default App
