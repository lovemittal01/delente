import React from "react";

const MyProfilePage = () => {
  const profileData = {
    name: "Love Mittal",
    email: "lovemitta09@gmail.com",
    phone: "+91 86508 81235",
    address: "Delta 1, Noida, Uttar Pradesh",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder avatar
    orderHistory: [
      {
        id: 1,
        name: "Wireless Headphones",
        date: "2025-01-15",
        status: "Shipped",
      },
      { id: 2, name: "Smartwatch", date: "2025-01-05", status: "Delivered" },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="flex items-center space-x-4 mb-6">
        <img
          src={profileData.avatarUrl}
          alt="Avatar"
          className="w-32 h-32 rounded-full border-2 border-gray-200"
        />
        <div>
          <h2 className="text-xl font-semibold">{profileData.name}</h2>
          <p className="text-gray-600">{profileData.email}</p>
          <p className="text-gray-600">{profileData.phone}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium">Address</h3>
        <p className="text-gray-700">{profileData.address}</p>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Order History</h3>
        <ul className="space-y-4">
          {profileData.orderHistory.map((order) => (
            <li key={order.id} className="border p-4 rounded-lg">
              <p className="font-semibold">{order.name}</p>
              <p className="text-sm text-gray-600">Ordered on {order.date}</p>
              <p
                className={`text-sm ${
                  order.status === "Shipped"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                Status: {order.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfilePage;
