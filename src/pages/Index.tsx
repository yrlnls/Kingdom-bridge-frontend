import Hero from "@/components/Hero";
import PrayerWall from "@/components/PrayerWall";
import DevotionalSection from "@/components/DevotionalSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";

const Index = () => {

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch("https://kingdom-bridge-backend.onrender.com/api/posts", {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      return res.json();
    })
    .then((data) => {
      setPosts(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);


if (loading) return <div>Loading ...</div>


console.log("Posts:", posts);
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <DevotionalSection />
      <PrayerWall />
      <Footer />
    </div>
  );
};

export default Index;

