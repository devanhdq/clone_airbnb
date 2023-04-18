import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-60">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="Enter your email..." />
          <input type="password" placeholder="Enter your password..." />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? 
            <Link className=" underline text-black" to={"/register"}> Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
