import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import {
  BUSINESS_NAME,
  BUSINESS_SLOGAN,
  TOMATO_RED,
  BUSINESS_DESCRIPTION,
  PHILOSOPHY,
} from "./constants";

function App() {
  const [count, setCount] = useState(0);
  const [showElement, setShowElement] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false); // State for form visibility
  const [isPhilosophyVisible, setIsPhilosophyVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  const [isConsultationFormVisible, setIsConsultationFormVisible] = useState(false);
  const [isEventsFormVisible, setIsEventsFormVisible] = useState(false);

  useEffect(() => {
    const animateText = () => {
      const businessName = document.querySelector(".business-name");
      businessName.textContent = BUSINESS_NAME;
      const text = BUSINESS_NAME;
      businessName.innerHTML = "";

      if (!businessName) return;

      const spans = text.split("").map((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.transition = "color 0.5s";
        span.style.color = "white";
        businessName.appendChild(span);
        return span;
      });

      spans.forEach((span, index) => {
        setTimeout(() => {
          span.style.color = "var(--my-red)";

          if (index === spans.length - 1) {
            setTimeout(() => {
              spans.forEach((s, i) => {
                setTimeout(() => {
                  s.style.color = "white";
                }, i * 500);
              });
            }, 500);
          }
        }, index * 500);
      });
    };

    animateText();
    const interval = setInterval(
      animateText,
      500 * BUSINESS_NAME.length * 2 + 1000
    );

    return () => clearInterval(interval);
  }, []);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handlePhilosophyClick = () => {
    const descriptionElement = document.querySelector(".card .text-lg p");
    if (descriptionElement) {
      descriptionElement.textContent = PHILOSOPHY;
    }
  };

  const togglePhilosophy = () => {
    if (isDescriptionVisible) {
      setIsDescriptionVisible(false);
      setTimeout(() => {
        setIsPhilosophyVisible(true);
      }, 600); // Wait for description to fade out
    } else {
      setIsPhilosophyVisible(false);
      setTimeout(() => {
        setIsDescriptionVisible(true);
      }, 600); // Wait for philosophy to fade out
    }
  };

  const toggleConsultationForm = () => {
    setIsConsultationFormVisible(!isConsultationFormVisible);
    if (isEventsFormVisible) setIsEventsFormVisible(false); // Ensure only one form is visible
  };

  const toggleEventsForm = () => {
    setIsEventsFormVisible(!isEventsFormVisible);
    if (isConsultationFormVisible) setIsConsultationFormVisible(false); // Ensure only one form is visible
  };

  return (
    <div className="flex">
      {" "}
      {/* Added flex container to hold nav and main content */}
      {/* Navigation moved here from index.html */}
      <nav className="fixed top-0 left-0 h-screen w-1/5 flex flex-col z-30">
        <div
          id="events" // Keep id if needed elsewhere, but onClick is primary now
          onClick={toggleEventsForm} // Added direct onClick handler
          className="flex-1 w-full bg-gray-400/15 hover:bg-gray-500/15 hover-text-my-red text-lg font-bold border-0 rounded-none flex items-center justify-center cursor-pointer"
        >
          Events & Classes
        </div>
        <div
          id="consultation" // Keep id if needed elsewhere, but onClick is primary now
          onClick={toggleConsultationForm} // Added direct onClick handler
          className="flex-1 w-full bg-gray-400/15 hover:bg-gray-500/15 hover-text-my-red text-lg font-bold border-0 rounded-none flex items-center justify-center cursor-pointer"
        >
          Book Consultation
        </div>
        <div
          id="philosophy" // Keep id if needed elsewhere, but onClick is primary now
          onClick={handlePhilosophyClick}
          className="flex-1 w-full bg-gray-400/15  hover:bg-gray-500/15 hover-text-my-red text-lg font-bold border-0 rounded-none flex items-center justify-center cursor-pointer"
        >
          Our Philosophy
        </div>
      </nav>
      {/* Main App Content - Added ml-1/5 to offset for the nav */}
      <div className="App flex flex-col items-center h-screen relative overflow-hidden w-4/5 ml-[20%]">
        {" "}
        {/* Adjusted width and added margin */}
        <h1 className="business-name text-4xl" data-style="text-4xl">
          {BUSINESS_NAME}
        </h1>{" "}
        {/* Added margin-top */}
        <div className="card w-96 p-4 mt-8 items-center">
          <div className="text-xl mb-40">{BUSINESS_SLOGAN}</div>
          {isDescriptionVisible && (
            <div className={`text-lg fade-out ${isDescriptionVisible ? "fade-in" : ""}`}>
              <p className="w-fit">{BUSINESS_DESCRIPTION}</p>
            </div>
          )}
          {isPhilosophyVisible && (
            <div className={`text-lg fade-out ${isPhilosophyVisible ? "fade-in" : ""}`}>
              <p className="w-fit">{PHILOSOPHY}</p>
            </div>
          )}
        </div>
        {/* Sliding Form for Consultation */}
        <div className={`side-form ${isConsultationFormVisible ? "visible" : ""}`}>
          <div
            onClick={toggleConsultationForm}
            className="bg-gray-600 absolute top-4 right-4 text-lg font-bold hover:cursor-pointer w-8 h-8 flex items-center justify-center rounded-full"
          >
            <svg
              className="h-6 w-6 shrink-0"
              viewBox="0 0 22 22"
              fill="none"
              strokeLinecap="square"
            >
              <circle cx="11" cy="11" r="11" className="fill-gray-400/25" />
              <circle cx="11" cy="11" r="10.5" className="stroke-gray-400/25" />
              <path
                d="M8 8L14 14M8 14L14 8"
                className="stroke-gray-800 dark:stroke-gray-300"
              />
            </svg>
          </div>
          <h2 className="text-2xl mb-4">Contact Me</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Sliding Form for Events */}
        <div className={`side-form ${isEventsFormVisible ? "visible" : ""}`}>
          <div
            onClick={toggleEventsForm}
            className="bg-gray-600 absolute top-4 right-4 text-lg font-bold hover:cursor-pointer w-8 h-8 flex items-center justify-center rounded-full"
          >
            <svg
              className="h-6 w-6 shrink-0"
              viewBox="0 0 22 22"
              fill="none"
              strokeLinecap="square"
            >
              <circle cx="11" cy="11" r="11" className="fill-gray-400/25" />
              <circle cx="11" cy="11" r="10.5" className="stroke-gray-400/25" />
              <path
                d="M8 8L14 14M8 14L14 8"
                className="stroke-gray-800 dark:stroke-gray-300"
              />
            </svg>
          </div>
          <h2 className="text-2xl mb-4">Calendar Events</h2>
          <div className="calendar-events">
            <ul>
              <li>Event 1: April 25, 2025</li>
              <li>Event 2: May 1, 2025</li>
              <li>Event 3: May 15, 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
