'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'

type Property = {
  id: number;
  title: string;
  amount: string; // Make sure to use amount instead of loc
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
          <li key={property.title}>
            <h2>{property.title}</h2>
            <p>ID: {property.id}</p>
            <p>Amount: {property.amount}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default Test;
