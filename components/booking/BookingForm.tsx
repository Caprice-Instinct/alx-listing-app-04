import axios from "axios";
import { useState } from "react";
import CancellationPolicy from "./CancellationPolicy";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch (error) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Contact Detail</h2>
        <form onSubmit={handleSubmit}>
          {/* Contact Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-2 w-full mt-2" 
              />
            </div>
            <div>
              <label>Last Name</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-2 w-full mt-2" 
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full mt-2" 
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input 
                type="text" 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border p-2 w-full mt-2" 
              />
            </div>
          </div>

          {/* Payment Information */}
          <h2 className="text-xl font-semibold mt-6">Pay with</h2>
          <div className="mt-4">
            <label>Card Number</label>
            <input 
              type="text" 
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="border p-2 w-full mt-2" 
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label>Expiration Date</label>
              <input 
                type="text" 
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                className="border p-2 w-full mt-2" 
              />
            </div>
            <div>
              <label>CVV</label>
              <input 
                type="text" 
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="border p-2 w-full mt-2" 
              />
            </div>
          </div>

          {/* Billing Address */}
          <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
          <div className="mt-4">
            <label>Street Address</label>
            <input 
              type="text" 
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              className="border p-2 w-full mt-2" 
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full disabled:opacity-50"
          >
            {loading ? "Processing..." : "Confirm & Pay"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
      <CancellationPolicy />
    </>
  );

export default BookingForm;