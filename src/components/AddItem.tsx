import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImagePicker } from './ImagePicker';
import { shopService } from '../services/shopService';

export function AddItem() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    costPrice: '',
    sellingPrice: '',
    description: '',
    imageUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newItem = {
        name: formData.name,
        costPrice: parseFloat(formData.costPrice),
        sellingPrice: parseFloat(formData.sellingPrice),
        description: formData.description,
        imageUrl: formData.imageUrl || 'https://via.placeholder.com/150'
      };
      
      await shopService.addItem(newItem);
      navigate('/');
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Failed to add item. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (imageUrl: string) => {
    setFormData(prev => ({
      ...prev,
      imageUrl
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <ImagePicker 
          imageUrl={formData.imageUrl} 
          onImageChange={handleImageChange}
        />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="costPrice" className="block text-sm font-medium text-gray-700">
              Cost Price
            </label>
            <input
              type="number"
              id="costPrice"
              name="costPrice"
              required
              step="0.01"
              min="0"
              value={formData.costPrice}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="sellingPrice" className="block text-sm font-medium text-gray-700">
              Selling Price
            </label>
            <input
              type="number"
              id="sellingPrice"
              name="sellingPrice"
              required
              step="0.01"
              min="0"
              value={formData.sellingPrice}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200 disabled:bg-purple-400"
          >
            {isSubmitting ? 'Adding...' : 'Add Item'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            disabled={isSubmitting}
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200 disabled:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}