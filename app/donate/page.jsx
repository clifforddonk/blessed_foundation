"use client";
// import React, { useState } from "react";
// import axiosInstance from "../axios/axiosInstance"; // Adjust this import path

// const DonationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phoneNumber: "",
//     amount: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       // Submit the form data to your API endpoint
//       const response = await axiosInstance.post("/donations", formData);

//       // Handle successful submission
//       setLoading(false);
//       setSubmitted(true);
//       setFormData({
//         fullName: "",
//         phoneNumber: "",
//         amount: "",
//       });
//     } catch (err) {
//       // Handle error
//       setLoading(false);
//       setError(
//         err.response?.data?.message ||
//           "Failed to process donation. Please try again."
//       );
//       console.error("Donation submission error:", err);
//     }
//   };

//   return (
//     <div className="bg-gray-50 py-16">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-extrabold text-gray-900">
//             Make a Donation
//           </h2>
//           <p className="mt-4 text-xl text-gray-500">
//             Your contribution helps us create positive change in communities
//             around the world
//           </p>
//         </div>

//         <div className="bg-white p-8 rounded-lg shadow-lg">
//           {submitted ? (
//             <div className="text-center py-10">
//               <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-indigo-600"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
//               <p className="mt-2 text-gray-600">
//                 Your donation has been received. We appreciate your support!
//               </p>
//               <button
//                 onClick={() => setSubmitted(false)}
//                 className="mt-6 px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
//               >
//                 Make Another Donation
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="fullName"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="phoneNumber"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="+1 (123) 456-7890"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="amount"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Donation Amount
//                 </label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <span className="text-gray-500 sm:text-sm">$</span>
//                   </div>
//                   <input
//                     type="number"
//                     id="amount"
//                     name="amount"
//                     value={formData.amount}
//                     onChange={handleChange}
//                     required
//                     min="1"
//                     step="any"
//                     className="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                     placeholder="0.00"
//                   />
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                     <span className="text-gray-500 sm:text-sm">USD</span>
//                   </div>
//                 </div>
//               </div>

//               {error && (
//                 <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
//                   {error}
//                 </div>
//               )}

//               <div className="pt-4">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors flex justify-center"
//                 >
//                   {loading ? (
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                   ) : (
//                     "Donate Now"
//                   )}
//                 </button>
//               </div>

//               <div className="mt-4 text-center text-sm text-gray-500">
//                 <p>Your donation will help support our programs worldwide.</p>
//                 <p className="mt-1">All donations are tax-deductible.</p>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonationForm;
import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axiosInstance"; // Make sure this is properly configured

const DonationsList = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        // Make sure your endpoint URL is correct
        const response = await axiosInstance.get("/donations");
        setDonations(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  if (loading) return <div>Loading donations...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="donations-list">
      <h2>Donations</h2>
      {donations.length === 0 ? (
        <p>No donations found.</p>
      ) : (
        <ul>
          {donations.map((donation) => (
            <li key={donation.id} className="donation-item">
              <div>
                <strong>Reference:</strong> {donation.payment_reference}
              </div>
              <div>
                <strong>Email:</strong> {donation.email}
              </div>
              <div>
                <strong>Amount:</strong> ${donation.amount}
              </div>
              <div>
                <strong>Campaign:</strong> {donation.campaign}
              </div>
              <div>
                <strong>Fullname:</strong> {donation.full_name}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DonationsList;
