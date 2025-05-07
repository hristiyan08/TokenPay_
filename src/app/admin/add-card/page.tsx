'use client'
import React, { useState } from "react";

const Page = () => {
    // State for form inputs
    const [cardNum, setCardNum] = useState("");
    const [cardholderName, setCardholderName] = useState("");
    const [validThru, setValidThru] = useState("");
    const [cvv, setCvv] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // You can transfer the data to another file, e.g., a function call or API request.
        console.log("Card Data Submitted:", { cardNum, cardholderName, validThru, cvv });

        // Example: You can pass the data to the Supabase client or another function here.
        // createClient().from('cards').upsert({ cardNum, cardholderName, validThru, cvv });
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Add bank card
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" id="add-card" onSubmit={handleSubmit}>
                    {/* Card Number */}
                    <div>
                        <label htmlFor="card_num" className="block text-sm font-medium text-gray-900">
                            Card number
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="card_num"
                                id="card_num"
                                value={cardNum}
                                onChange={(e) => setCardNum(e.target.value)}
                                onInput={formatCardNumber}
                                maxLength={19}
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Cardholder Name */}
                    <div>
                        <label htmlFor="cardholder_name" className="block text-sm font-medium text-gray-900">
                            Cardholder name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="cardholder_name"
                                id="cardholder_name"
                                value={cardholderName}
                                onChange={(e) => setCardholderName(e.target.value)}
                                onInput={validateCardholderName}
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Valid Thru */}
                    <div>
                        <label htmlFor="valid_thru" className="block text-sm font-medium text-gray-900">
                            Valid thru:
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="valid_thru"
                                id="valid_thru"
                                value={validThru}
                                onChange={(e) => setValidThru(e.target.value)}
                                onInput={formatValidThru}
                                maxLength={7}
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* CVV */}
                    <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-900">
                            CVV:
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="cvv"
                                id="cvv"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                onInput={formatCardNumber}
                                maxLength={3}
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add card
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


// Helper functions for formatting card inputs
function formatCardNumber(event: React.FormEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, "").slice(0, 20);
    input.value = input.value.replace(/(\d{4})(?=\d)/g, "$1 ");
}

function validateCardholderName(event: React.FormEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^A-Za-z .'-]/g, "");
}

function formatValidThru(event: React.FormEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, "").slice(0, 4);
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2) + " / " + input.value.slice(2, 4);
    }
}

export default Page;
