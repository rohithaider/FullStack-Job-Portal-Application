import React from "react";
import Happy1 from "../../src/assets/happy1.jpg";
import Happy2 from "../../src/assets/happy2.jpg";
import { motion } from "motion/react";

function Home() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Find Your Dream Job with Jobs Bd
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Explore job opportunities in various industries and take the next
            step in your career with Jobs Bd. Your future starts here.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Start Your Job Search
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Post a Job
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex flex-col items-center relative">
          <motion.img
            animate={{ y: [-50, 10, -50] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={Happy1}
            alt="mockup"
            className="w-48 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-400 object-cover mb-4"
          />
          
          {/* Motion Block of Squares */}
          <motion.div
            className="grid grid-cols-4 gap-2  absolute bottom-0 left-0"
            animate={{ y: [-70, 0, -70] }}  // Same motion as the image
            transition={{ duration: 5, repeat: Infinity }}
          >
            {/* Create 16 small squares */}
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                className="w-4 h-4 bg-blue-400 border border-dotted"
              />
            ))}
          </motion.div>
          
          <motion.img
            animate={{ x: [50, 100, 50] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={Happy2}
            alt="mockup"
            className="w-48 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-400 object-cover"
          />
           <motion.div
            className="grid grid-cols-4 gap-2  absolute bottom-0 left-0"
            animate={{ x: [50, 100, 50] }}  // Same motion as the image
            transition={{ delay:2.5,duration: 5, repeat: Infinity }}
          >
            {/* Create 16 small squares */}
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                className="w-4 h-4 bg-blue-400 border border-dotted"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
