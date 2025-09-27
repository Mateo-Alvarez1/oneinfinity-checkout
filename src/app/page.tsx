"use client";

import { useState } from "react";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: 100.0,
            currency: "ARS",
            type: "PAYMENT",
            country_id: "ARG",
            title: "Suscripción Premium",
            email: "juan@example.com",
            first_name: "juan",
            last_name: "perez",
            phone_number: "5491123456789",
          }),
        }
      );

      const data = await res.json();
      console.log(data);

      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        console.error("Error:", data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid place-content-center h-screen">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="px-12 py-8 font-medium text-3xl text-black  bg-transparent border border-slate-600 hover:text-white rounded-3xl hover:bg-slate-700 animation duration-300"
      >
        {loading ? "Redirigiendo..." : "Pagar con one"}
      </button>
    </div>
  );
}
