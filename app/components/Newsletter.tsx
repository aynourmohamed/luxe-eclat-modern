"use client";

import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <section className="bg-white py-16 px-6 text-center">
            <h2 className="text-brand text-2xl font-semibold font-heading mb-2">                Stay in the Glow
            </h2>
            <p className="text-gray-500 mb-6">
                Sign up for exclusive offers, new arrivals, and candle care tips.
            </p>

            {submitted ? (
                <p className="text-brand font-medium">Thanks for subscribing!</p>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="border rounded-full px-4 py-2 flex-1"
                    />
                    <button type="submit" className="bg-brand text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                        Subscribe
                    </button>
                </form>
            )}
        </section>
    );
}