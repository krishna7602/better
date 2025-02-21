import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="relative h-[400px] bg-[#004733] bg-cover bg-center flex items-center justify-center text-white text-center px-5"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?business,teamwork')" }}>
        <h1 className="text-4xl md:text-6xl font-bold">Better Begins Here</h1>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-5">
        <h2 className="text-3xl md:text-5xl font-semibold text-center">Our Mission</h2>
        <p className="text-lg text-center text-gray-600 mt-4">
          We are committed to making homeownership simpler, faster, and more accessible for everyone.
        </p>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
            <h3 className="text-2xl font-bold">Who We Are</h3>
            <p className="text-gray-600 mt-3">
              We’re a team of innovators, developers, and dreamers working to transform the mortgage industry.
              By leveraging technology and transparency, we aim to streamline the process and eliminate
              unnecessary fees.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">What We Do</h3>
            <p className="text-gray-600 mt-3">
              Our platform connects home buyers with mortgage lenders seamlessly, providing competitive
              rates and a hassle-free application experience.
            </p>
          </div>
        </div>
      </div>


      <div className="bg-[#004733] text-white py-12">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold">1M+</h2>
            <p className="text-lg mt-2">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">$50B+</h2>
            <p className="text-lg mt-2">Loans Processed</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">5K+</h2>
            <p className="text-lg mt-2">Industry Experts</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto py-12 px-5">
        <h2 className="text-3xl md:text-5xl font-semibold text-center">Meet Our Team</h2>
        <p className="text-lg text-center text-gray-600 mt-4">
          The passionate people behind our success.
        </p>
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          <div className="text-center">
            <img src="https://img.freepik.com/premium-vector/cute-parakeet-holding-chilli-parrot-cartoon-character-bird-illustration_1150526-42.jpg?semt=ais_hybrid" className="rounded-full mx-auto" alt="CEO" />
            <h3 className="text-xl font-semibold mt-3">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="text-center">
            <img src="https://img.freepik.com/premium-vector/cute-parakeet-holding-chilli-parrot-cartoon-character-bird-illustration_1150526-42.jpg?semt=ais_hybrid" className="rounded-full mx-auto" alt="COO" />
            <h3 className="text-xl font-semibold mt-3">Jane Smith</h3>
            <p className="text-gray-600">Chief Operating Officer</p>
          </div>
          <div className="text-center">
            <img src="https://img.freepik.com/premium-vector/cute-parakeet-holding-chilli-parrot-cartoon-character-bird-illustration_1150526-42.jpg?semt=ais_hybrid" className="rounded-full mx-auto" alt="CTO" />
            <h3 className="text-xl font-semibold mt-3">Michael Lee</h3>
            <p className="text-gray-600">Chief Technology Officer</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Better. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default About;
