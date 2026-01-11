import React, { useState } from 'react';
import Image from 'next/image';
import { PROPERTYLISTINGSAMPLE, FILTER_OPTIONS, HERO_BACKGROUND } from '@/constants';
import { PropertyProps } from '@/interfaces';
import Pill from '@/components/common/Pill';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>('');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3">
          {FILTER_OPTIONS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(activeFilter === filter ? '' : filter)}
            />
          ))}
        </div>
      </section>

      {/* Listings Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}

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
