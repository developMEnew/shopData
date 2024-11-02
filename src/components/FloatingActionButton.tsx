import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export function FloatingActionButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/add')}
      className="fixed bottom-6 right-6 w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors duration-200"
    >
      <FaPlus className="text-white text-xl" />
    </button>
  );
}