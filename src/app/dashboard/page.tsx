'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';
interface Params {
  firstName: string;
  lastName: string;
}

const Dashboard = () => {
  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName') ;
  const lastName = searchParams.get('lastName');
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          Hey 👋, {firstName} {lastName}!
        </h1>
        <p className="mt-2 text-gray-500 text-lg">Welcome back to your dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;
