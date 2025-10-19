"use client";
import Button from "../button"
import { signIn } from 'next-auth/react';

const Login = () => {
    return (
        <Button
            label="Sign in with Google"
            className="mt-4"
            onClick={() => signIn('google', { callbackUrl: '/admin' })}
        />
    )
}

export default Login;