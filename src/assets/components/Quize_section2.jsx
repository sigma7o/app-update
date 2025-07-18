import React, { useRef } from 'react';
import { GoDotFill } from "react-icons/go";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import spaceQuizData from './api/quizedata2';

const Quize_section2 = () => {
 
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const cardWidth = 300; // ~250px card + gap/margin
    const scrollAmount = cardWidth * 2; // Scroll 2 cards
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="py-6 bg-white overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Heading and Arrows */}
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

        {/* Card Scroll Section */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scroll-smooth scrollbar-hide"
        >
          {spaceQuizData.map(({ topicId, topicTitle, topicImageUrl }) => (
            <div
              key={topicId}
              className="min-w-[250px] flex-shrink-0 group bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl"
            >
              <figure className="w-full h-48 overflow-hidden rounded-t-xl">
                <img
                  src={topicImageUrl}
                  alt={topicTitle}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </figure>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{topicTitle}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quize_section2;
