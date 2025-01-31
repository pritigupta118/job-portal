"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Briefcase, Users, Globe, Star } from "lucide-react"
import { motion } from "framer-motion"
import { Marquee } from "@/components/ui/marquee"
import { Particles } from "@/components/ui/particles"
import CategoryCarousel from "@/components/CategoryCarousel"
import LatestJobs from "@/components/LatestJobs"
import Footer from "@/components/Footer"



const ReviewCard = ({
  name,
  username,
  body, }: {
    name: string;
    username: string;
    body: string;
  }) => (
  <div className="bg-black bg-opacity-50 rounded-lg p-4 backdrop-blur-sm border border-pink-500 border-opacity-30 shadow-xl mx-4 w-80">
    <p className="text-gray-300 mb-2">{body}</p>
    <div className="flex items-center">
      <Star className="h-4 w-4 text-amber-500 mr-1" />
      <Star className="h-4 w-4 text-amber-500 mr-1" />
      <Star className="h-4 w-4 text-amber-500 mr-1" />
      <Star className="h-4 w-4 text-amber-500 mr-1" />
      <Star className="h-4 w-4 text-amber-500 mr-1" />
    </div>
    <p className="text-pink-400 font-semibold mt-2">{name}</p>
    <p className="text-gray-400 text-sm">{username}</p>
  </div>
)

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchTerm)
  }




  return (
    <section className="bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200">
            Find Your Dream Job Today
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-pink-500">
            Connect with top employers and discover opportunities that match your skills and aspirations.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-xl mx-auto"
        >
          <div className="flex rounded-md shadow-sm">
            <Input
              type="text"
              placeholder="Search jobs, companies, or keywords"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-l-md flex-grow bg-black text-white z-20"
            />
            <Button
              type="submit"
              className="rounded-l-none bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 transition-all duration-200"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>


        </motion.form>
        <div className="mx-auto max-w-7xl">

          <CategoryCarousel />

          <LatestJobs />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          <div className="flex items-center justify-center bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-10 shadow-xl">
            <Briefcase className="h-10 w-10 text-blue-400 mr-4" />
            <div className="text-left">
              <p className="text-2xl font-bold">
                10,000+</p>
              <p className="text-gray-300">Job Listings</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-10 shadow-xl">
            <Users className="h-10 w-10 text-green-400 mr-4" />
            <div className="text-left">
              <p className="text-2xl font-bold">5,000+</p>
              <p className="text-gray-300">Companies</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-10 shadow-xl">
            <Globe className="h-10 w-10 text-purple-400 mr-4" />
            <div className="text-left">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-gray-300">Countries</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">What Our Users Say</h2>
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </motion.div>

      </div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <Footer />

    </section>
  )
}

