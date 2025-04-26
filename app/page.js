import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/background.JPG"
            alt="People being helped"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Change a Life Today
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
            Your support can make a meaningful difference in the lives of those
            who need it most. Join us in our mission to create positive change
            in communities around the world.
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <a
              href="/join-us"
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
            >
              Join Us
            </a>
            <a
              href="/about"
              className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Impact
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              See how your support is changing lives around the world
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600">5,000+</div>
              <div className="mt-2 text-gray-700">Families supported</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600">20+</div>
              <div className="mt-2 text-gray-700">Communities served</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600">95%</div>
              <div className="mt-2 text-gray-700">
                Funds directly to programs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Programs
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover how we're making a difference
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img
                src="/background.JPG"
                alt="Education"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Education</h3>
                <p className="mt-2 text-gray-600">
                  Providing access to quality education and resources for
                  children and adults alike.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img
                src="/background.JPG"
                alt="Healthcare"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Healthcare
                </h3>
                <p className="mt-2 text-gray-600">
                  Delivering essential medical services to underserved
                  communities worldwide.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img
                src="/background.JPG"
                alt="Community Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Community Development
                </h3>
                <p className="mt-2 text-gray-600">
                  Building sustainable infrastructure and empowering local
                  leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
