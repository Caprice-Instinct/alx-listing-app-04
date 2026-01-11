import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { FILTER_OPTIONS, HERO_BACKGROUND } from '@/constants';
import { PropertyProps } from '@/interfaces';
import Pill from '@/components/common/Pill';
import PropertyCard from '@/components/property/PropertyCard';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>('');
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

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
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}
