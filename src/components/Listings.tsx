"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaTag, FaDollarSign, FaBed, FaBath, FaUserFriends, FaRulerCombined,
  FaMapMarkerAlt
} from "react-icons/fa";

type Listing = {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  category: string;
  price: number;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  locationValue: string;
  size?: number;
};

const Listings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get<Listing[]>("/api/upload");
        setListings(response.data);
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
    const interval = setInterval(fetchListings, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-6 py-60 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
        Featured Listings
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {listings.map((listing) => (
          <motion.div
            key={listing.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
          >
            <div 
              className="cursor-pointer"
              onClick={() => setSelectedListing(listing)}
            >
              <img 
                src={listing.imageSrc} 
                alt={listing.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {listing.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {listing.description}
                </p>
                
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaTag className="text-blue-600 flex-shrink-0" />
                    <span className="text-sm">{listing.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaDollarSign className="text-green-600 flex-shrink-0" />
                    <span className="text-sm">${listing.price.toLocaleString()} / night</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-600 flex-shrink-0" />
                    <span className="text-sm">{listing.locationValue}</span>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <div className="flex items-center gap-1">
                      <FaBed className="text-purple-600" />
                      <span className="text-sm">{listing.roomCount}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBath className="text-teal-600" />
                      <span className="text-sm">{listing.bathroomCount}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUserFriends className="text-orange-600" />
                      <span className="text-sm">{listing.guestCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedListing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setSelectedListing(null)}
            >
              ✖
            </button>
            <img 
              src={selectedListing.imageSrc} 
              alt={selectedListing.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedListing.title}
              </h3>
              <p className="text-gray-600 mb-6">{selectedListing.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <FaTag className="text-blue-600" />
                  <span>Category: {selectedListing.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaDollarSign className="text-green-600" />
                  <span>Price: ${selectedListing.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBed className="text-purple-600" />
                  <span>Bedrooms: {selectedListing.roomCount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBath className="text-teal-600" />
                  <span>Bathrooms: {selectedListing.bathroomCount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUserFriends className="text-orange-600" />
                  <span>Guests: {selectedListing.guestCount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-600" />
                  <span>{selectedListing.locationValue}</span>
                </div>
              </div>

              {selectedListing.locationValue && (
                <iframe 
                  className="w-full h-56 rounded-lg border-0"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedListing.locationValue)}&t=&z=13&ie=UTF8&iwloc=&output=embed`} 
                  loading="lazy"
                ></iframe>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Listings;