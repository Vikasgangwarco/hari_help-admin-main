import React from 'react';
import './Pharmacy.css';

const Pharmacy = () => {
  const pharmacyData = [
    { 
      id: 1, 
      name: "Health Plus Pharmacy", 
      address: "123 Main Street, Springfield", 
      contact: "+91-9876543210", 
      timings: "9:00 AM - 9:00 PM", 
      medicinesAvailable: [
        { name: "Paracetamol", stock: 50, price: 10, category: "tablet" },
        { name: "Ibuprofen", stock: 30, price: 15, category: "tablet" },
        { name: "Amoxicillin", stock: 20, price: 25, category: "tablet" },
        { name: "Cough Syrup", stock: 100, price: 40, category: "syrup" },
        { name: "Vitamin C", stock: 75, price: 20, category: "tablet" },
        { name: "Bandage", stock: 100, price: 50, category: "surgical" } 
      ] 
    },
    { 
      id: 2, 
      name: "CareWell Drugs", 
      address: "456 Elm Street, Metropolis", 
      contact: "+91-8765432109", 
      timings: "8:00 AM - 8:00 PM", 
      medicinesAvailable: [
        { name: "Cetirizine", stock: 100, price: 5, category: "tablet" },
        { name: "Aspirin", stock: 40, price: 12, category: "tablet" },
        { name: "Metformin", stock: 25, price: 18, category: "tablet" },
        { name: "Antihistamine", stock: 50, price: 30, category: "tablet" },
        { name: "Loratadine", stock: 60, price: 15, category: "tablet" },
        { name: "Surgical Mask", stock: 150, price: 5, category: "surgical" }
      ]
    },
    { 
      id: 3, 
      name: "Wellness Pharmacy", 
      address: "789 Oak Street, Gotham", 
      contact: "+91-7654321098", 
      timings: "10:00 AM - 10:00 PM", 
      medicinesAvailable: [
        { name: "Omeprazole", stock: 60, price: 20, category: "tablet" },
        { name: "Losartan", stock: 35, price: 30, category: "tablet" },
        { name: "Atorvastatin", stock: 45, price: 25, category: "tablet" },
        { name: "Pantoprazole", stock: 20, price: 35, category: "tablet" },
        { name: "Doxycycline", stock: 40, price: 50, category: "tablet" },
        { name: "First Aid Kit", stock: 50, price: 150, category: "surgical" }
      ]
    },
    { 
      id: 4, 
      name: "City Care Pharmacy", 
      address: "101 Pine Street, Star City", 
      contact: "+91-7654321097", 
      timings: "7:00 AM - 11:00 PM", 
      medicinesAvailable: [
        { name: "Azithromycin", stock: 20, price: 50, category: "tablet" },
        { name: "Ciprofloxacin", stock: 15, price: 45, category: "tablet" },
        { name: "Levocetirizine", stock: 30, price: 25, category: "tablet" },
        { name: "Amoxicillin", stock: 50, price: 40, category: "tablet" },
        { name: "Ranitidine", stock: 60, price: 15, category: "tablet" },
        { name: "Thermometer", stock: 70, price: 75, category: "surgical" }
      ]
    },
    { 
      id: 5, 
      name: "Life Line Pharmacy", 
      address: "202 Maple Street, Central City", 
      contact: "+91-6543210987", 
      timings: "9:00 AM - 10:00 PM", 
      medicinesAvailable: [
        { name: "Pantoprazole", stock: 60, price: 30, category: "tablet" },
        { name: "Dolo 650", stock: 40, price: 20, category: "tablet" },
        { name: "Ranitidine", stock: 50, price: 15, category: "tablet" },
        { name: "Paracetamol", stock: 100, price: 10, category: "tablet" },
        { name: "Cetirizine", stock: 70, price: 12, category: "tablet" },
        { name: "Medical Gloves", stock: 200, price: 15, category: "surgical" }
      ]
    },
    { 
      id: 6, 
      name: "Health Hub Pharmacy", 
      address: "303 Birch Street, Coast City", 
      contact: "+91-5432109876", 
      timings: "8:00 AM - 9:00 PM", 
      medicinesAvailable: [
        { name: "Clopidogrel", stock: 25, price: 100, category: "tablet" },
        { name: "Amlodipine", stock: 35, price: 45, category: "tablet" },
        { name: "Simvastatin", stock: 30, price: 50, category: "tablet" },
        { name: "Cetirizine", stock: 50, price: 15, category: "tablet" },
        { name: "Vitamin D", stock: 80, price: 25, category: "tablet" },
        { name: "Sterile Bandages", stock: 150, price: 20, category: "surgical" }
      ]
    },
    { 
      id: 7, 
      name: "Family Pharmacy", 
      address: "404 Cedar Street, Keystone City", 
      contact: "+91-4321098765", 
      timings: "6:00 AM - 10:00 PM", 
      medicinesAvailable: [
        { name: "Furosemide", stock: 50, price: 25, category: "tablet" },
        { name: "Hydrochlorothiazide", stock: 40, price: 20, category: "tablet" },
        { name: "Propranolol", stock: 30, price: 35, category: "tablet" },
        { name: "Aspirin", stock: 60, price: 18, category: "tablet" },
        { name: "Lisinopril", stock: 50, price: 30, category: "tablet" },
        { name: "Surgical Scissors", stock: 40, price: 100, category: "surgical" }
      ]
    },
    { 
      id: 8, 
      name: "Wellness Mart", 
      address: "505 Walnut Street, Emerald City", 
      contact: "+91-3210987654", 
      timings: "10:00 AM - 11:00 PM", 
      medicinesAvailable: [
        { name: "Dexamethasone", stock: 30, price: 60, category: "tablet" },
        { name: "Prednisolone", stock: 20, price: 55, category: "tablet" },
        { name: "Betamethasone", stock: 25, price: 50, category: "tablet" },
        { name: "Amlodipine", stock: 40, price: 15, category: "tablet" },
        { name: "Metformin", stock: 35, price: 20, category: "tablet" },
        { name: "Disinfectant Spray", stock: 80, price: 150, category: "surgical" }
      ]
    },
    { 
      id: 9, 
      name: "Quick Meds Pharmacy", 
      address: "606 Chestnut Street, Riverdale", 
      contact: "+91-2109876543", 
      timings: "9:00 AM - 8:00 PM", 
      medicinesAvailable: [
        { name: "Glibenclamide", stock: 15, price: 40, category: "tablet" },
        { name: "Glipizide", stock: 20, price: 45, category: "tablet" },
        { name: "Metformin", stock: 25, price: 35, category: "tablet" },
        { name: "Ciprofloxacin", stock: 50, price: 60, category: "tablet" },
        { name: "Amoxicillin", stock: 45, price: 25, category: "tablet" },
        { name: "Surgical Tape", stock: 60, price: 40, category: "surgical" }
      ]
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'syrup':
        return '🍶'; // Syrup icon
      case 'surgical':
        return '🩹'; // Surgical icon
      case 'tablet':
        return '💊'; // Tablet icon
      default:
        return '🔸'; // Default icon
    }
  };

  return (
    <div className="pharmacy-container">
      <h1 className="pharmacy-title">Pharmacy List</h1>
      <div className="pharmacy-card-grid">
        {pharmacyData.map((pharmacy) => (
          <div key={pharmacy.id} className="pharmacy-card">
            <h3 className="pharmacy-name">{pharmacy.name}</h3>
            <p className="pharmacy-address">📍 {pharmacy.address}</p>
            <p className="pharmacy-contact">📞 Contact: {pharmacy.contact}</p>
            <p className="pharmacy-timings">⏰ Timings: {pharmacy.timings}</p>
            <ul className="pharmacy-medicine-list">
              {pharmacy.medicinesAvailable.map((medicine, index) => (
                <li key={medicine.name + index} className="pharmacy-medicine-item">
                  {getCategoryIcon(medicine.category)} {medicine.name} - {medicine.stock} in stock - ₹{medicine.price}
                </li>
              ))}
            </ul>
            <p className="pharmacy-license-number">🏅 License No: {pharmacy.id * 100}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pharmacy;
