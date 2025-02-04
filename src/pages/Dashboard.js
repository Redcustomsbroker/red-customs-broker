import React from 'react';

function Dashboard() {
  const trackingData = [
    { id: 1, status: 'In Transit', location: 'New York' },
    { id: 2, status: 'Delivered', location: 'Los Angeles' },
  ];

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">My Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {trackingData.map((item) => (
          <div key={item.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Shipment #{item.id}</h3>
            <p className="text-gray-700">Status: {item.status}</p>
            <p className="text-gray-700">Location: {item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;