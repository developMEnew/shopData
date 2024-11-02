import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopList } from './components/ShopList';
import { AddItem } from './components/AddItem';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-purple-600 text-white p-4 mb-4">
          <h1 className="text-2xl font-bold text-center">My Shop</h1>
        </header>
        <main className="container mx-auto px-4 pb-20">
          <Routes>
            <Route path="/" element={<ShopList />} />
            <Route path="/add" element={<AddItem />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;