import { useParams, Link, useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import quizData from './api/quizData';


const TopicDetails = () => {


  const { topicId } = useParams();
  const navigate = useNavigate();

  const topic = quizData.flatMap(category => category.topics)
                        .find(t => t.id === topicId);

  if (!topic) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Topic Not Found</h1>
        <p className="text-lg text-gray-600">The requested topic does not exist.</p>
        <Link to="/categories" className="mt-6 text-blue-600 hover:underline">
          Go back to Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="absolute top-6 left-6 z-10">
        <Link to="/categories" className="flex items-center text-gray-600 hover:text-blue-500 transition-colors duration-300">
          <IoArrowBackCircleOutline size={40} />
          <span className="ml-2 font-medium hidden sm:inline">Back to Categories</span>
        </Link>
      </div>

      <div className="w-full relative h-96 sm:h-[500px]">
        <img
          src={topic.image}
          alt={topic.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center drop-shadow-lg">{topic.title}</h1>
        </div>
      </div>

      <div className="container mx-auto p-4 sm:p-8 -mt-24 sm:-mt-32 relative z-20">
        <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About this Quiz</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            {topic.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 pt-6">
            <div className="text-gray-700 text-lg">
              <p><span className="font-semibold">Questions:</span> {topic.questions.length}</p>
            </div>
            <button
              onClick={() => navigate(`/quiz/${topic.id}`)}
              className="mt-6 sm:mt-0 px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetails;