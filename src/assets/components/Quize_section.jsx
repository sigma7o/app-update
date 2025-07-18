import React, { useRef } from 'react';
import { GoDotFill } from "react-icons/go";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import quizData from './api/quizData';

const Quize_section = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const cardWidth = 300;
    const scrollAmount = cardWidth * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  // Find the 'Politics' category from the quizData
  const politicsCategory = quizData.find(cat => cat.id === 'politics');
  
  // If the category is not found, do not render anything
  if (!politicsCategory) return null;

  return (
    <div className="py-6 bg-white overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold flex items-center">
            <span className="text-[#461F7F]"><GoDotFill /></span> Politics
          </h1>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-gray-200 hover:bg-[#461F7F] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-gray-200 hover:bg-[#461F7F] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scroll-smooth scrollbar-hide"
        >
          {/* Map over the topics of the 'Politics' category */}
          {politicsCategory.topics.map((topic) => (
            <div
              key={topic.id}
              className="min-w-[250px] flex-shrink-0 group bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl"
            >
              {/* Link to the TopicDetails page */}
              <Link to={`/topic/${topic.id}`} className="block">
                <figure className="w-full h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quize_section;