import React from 'react';
import Image from 'next/image';
import { PropertyProps } from '@/interfaces';

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80';
          }}
        />
        {property.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            -{property.discount}%
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 truncate">{property.name}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {property.address.city}, {property.address.country}
        </p>
        
        <div className="flex items-center mb-2">
          <span className="text-yellow-400">★</span>
          <span className="text-sm text-gray-600 ml-1">{property.rating}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {property.offers.bed} bed • {property.offers.shower} bath
          </div>
          <div className="text-lg font-bold">
            ${property.price}
            <span className="text-sm font-normal text-gray-600">/night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;