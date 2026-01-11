import React from 'react';
import { PropertyProps } from '@/interfaces';

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
          <p className="text-gray-600 mb-4">
            {property.address.city}, {property.address.state}, {property.address.country}
          </p>
          
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="ml-2 text-lg">{property.rating}</span>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Amenities</h3>
            <p>{property.offers.bed} bed • {property.offers.shower} bath • {property.offers.occupants} guests</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="text-2xl font-bold mb-4">
            ${property.price} <span className="text-base font-normal">/ night</span>
          </div>
          {property.discount && (
            <div className="text-green-600 mb-4">
              {property.discount}% discount available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;