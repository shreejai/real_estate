'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PropertyCard from '@/components/PropertyCard'
import { useEffect, useState } from 'react'

type Property = {
  id: number;
  title: string;
  amount: string;
  beds: string;
  bath: string;
}

const Test: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('/api/properties');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log("Fetched properties:", data); // Log fetched data
        
        if (Array.isArray(data) && data.length === 0) {
          setError("No properties found");
        } else {
          setProperties(data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
        setError("Failed to fetch properties");
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar />
      <div>Test</div>
      <ul>
        {properties.map(property => (
          <li key={property.id} className='p-8 max-w-[900px] mx-auto'>
            <PropertyCard 
              id={property.id}
              title={property.title} 
              beds={property.beds}
              bath={property.bath}
              amount={property.amount}
            />
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default Test;
