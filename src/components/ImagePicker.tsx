import { ChangeEvent } from 'react';

interface ImagePickerProps {
  imageUrl: string;
  onImageChange: (url: string) => void;
}

export function ImagePicker({ imageUrl, onImageChange }: ImagePickerProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <div className="w-32 h-32 relative">
          <img
            src={imageUrl || 'https://via.placeholder.com/150'}
            alt="Product preview"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg">
            <span className="text-white text-sm">Change Image</span>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
            aria-label="Upload image"
          />
        </div>
      </div>
      <p className="text-xs text-gray-500 text-center">
        Click to upload or drag and drop<br />
        PNG, JPG (max. 5MB)
      </p>
    </div>
  );
}