'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'

type Property = {
  id: number;
  title: string;
  amount: string; // Ensure to use amount instead of loc
}

const Test: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('/api/properties/route');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log("Fetched properties:", data); // Log fetched data
        setProperties(data);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch properties", error);
        setError("Failed to fetch properties");
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const properties1 = [
    {
    id: 1,
    usertype: "Owner",
    title: "1bhk for sale",
    ptype: "Residential",
    phone: "450134377",
    pdesc: "",
    name: "Shreejai",
    loc: "Bharat Nagar",
    parent_loc: "",
    landmark: "",
    lat: null,
    lng: null,
    listingtype: "Rent",
    email: "",
    beds: "",
    bath: "",
    areatype: "Area",
    areatxt: "550 sq.ft.",
    amount: "15000",
    paid: "",
    imagefolder: ""
    },
    {
    id: 2,
    usertype: "Owner",
    title: "1BHK Flat for sale at Wardha Road, Nagpur.",
    ptype: "Residential",
    phone: "450134377",
    pdesc: "",
    name: "",
    loc: "",
    parent_loc: "",
    landmark: "",
    lat: null,
    lng: null,
    listingtype: "Rent",
    email: "",
    beds: "2",
    bath: "Not specified",
    areatype: "Built Up Area:",
    areatxt: "",
    amount: "",
    paid: "",
    imagefolder: ""
    },
    ]

  return (
    <>
      <Navbar />
      <div>Test</div>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h2>{property.title}</h2>
            <p>ID: {property.id}</p>
            <p>Amount: {property.amount}</p> {/* Use amount here */}
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default Test;
