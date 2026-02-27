import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function PriceCard() {
  let items = useSelector((state) => state.cart);
  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8">
      <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8">
        <div className="w-full flex justify-between items-center">
          <span className="text-lg text-gray-600 font-semibold">Subtotal</span>
          <span className="text-green-400 font-semibold text-lg">
            Rs {subtotal}/-
          </span>
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="text-lg text-gray-600 font-semibold">
            Delivery Fee
          </span>
          <span className="text-green-400 font-semibold text-lg">
            Rs {deliveryFee}/-
          </span>
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="text-lg text-gray-600 font-semibold">Taxes</span>
          <span className="text-green-400 font-semibold text-lg">
            Rs {taxes}/-
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between items-center p-9">
        <span className="text-2xl text-gray-600 font-semibold">Total</span>
        <span className="text-green-400 font-semibold text-2xl">
          Rs {total}/-
        </span>
      </div>
      <button
        className="w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all"
        onClick={() => toast.success("Order placed successfully!")}>
        Place Order
      </button>
    </div>
  );
}

export default PriceCard;
