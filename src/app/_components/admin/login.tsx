"use client";
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Button from "../button";

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            // Let NextAuth handle the redirect automatically
            await signIn('credentials', {
                username,
                password,
                callbackUrl: '/admin-ruti',
            });
        } catch (error) {
            setError('An error occurred during login');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm">
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="admin"
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="••••••••"
                />
            </div>

            {error && (
                <div className="text-red-600 text-sm">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="mt-4 bg-rosa-claro hover:bg-rosa text-white py-2 px-4 min-w-32 text-sm rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? "Signing in..." : "Sign In"}
            </button>
        </form>
    )
}

export default Login;