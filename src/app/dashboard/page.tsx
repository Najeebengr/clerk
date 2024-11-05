"use client";
import { useRouter } from "next/navigation";
import {  useEffect, useState } from "react";
import toast from "react-hot-toast";



const Dashboard = () => {
  useEffect(() => {
    getUserInfo()
    }, [])
    

const [userInfo, setUserInfo] = useState({firstName: "", lastName: "", email: ""});


  
  const router = useRouter();
  
  async function getUserInfo() {
    try {
      const response = await fetch("/api/currentUser", {
        method: "GET",
      });
      const result = await response.json();
      console.log("Response:", result);
      if (response.ok) {
        setUserInfo(result.user);
        
      } else {
        toast.error(result.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("An unexpected error occurred");
    }
  }

  async function signout() {
    try {
      const response = await fetch("/api/logout", {
        method: "GET",
      });
      const result = await response.json();
      console.log("Response:", result);
      if (response.ok) {
        toast.success(result.message || "Successfully Logged Out!");
        router.replace(`/`);
      } else {
        toast.error(result.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("An unexpected error occurred");
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">Hey 👋 {userInfo.firstName} {userInfo.lastName}</h1>
        <p className="mt-2 text-gray-500 text-lg">
          Welcome back to your dashboard!
        </p>
      </div>
      <button
        onClick={signout}
        className="mt-4 absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
