import React from "react";
import {
  FaTruckMoving,
  FaClock,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";
import chooseImg from "../assets/images/who.jpg";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white font-sans py-12 px-4 md:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row w-full gap-6">

        {/* Column 1 - Left Features */}
        <div className="flex flex-col lg:w-1/4 gap-6">

          {/* Reliable Moves */}
          <div className="flex-1 bg-[#0A66A3] text-white flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <FaTruckMoving size={40} className="mb-4" />
            <h3 className="text-lg font-bold uppercase tracking-wide text-center">
              Reliable Moves
            </h3>
            <p className="text-sm mt-2 text-center opacity-90 leading-relaxed">
              We ensure safe, damage-free relocation with expert packing and trained staff.
            </p>
          </div>

          {/* Timely Delivery */}
          <div className="flex-1 bg-[#0B0B0C] text-white flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <FaClock size={40} className="mb-4 text-white" />
            <h3 className="text-lg font-bold uppercase tracking-wide text-center">
              Timely Delivery
            </h3>
            <p className="text-sm mt-2 text-center opacity-80 leading-relaxed">
              We value your time—every relocation is completed within committed timelines.
            </p>
          </div>
        </div>

        {/* Column 2 - Center Image */}
        <div className="lg:w-[40%] w-full">
          <img
            src={chooseImg}
            alt="About Angel Packers & Movers"
            className="h-[300px] sm:h-[400px] lg:h-full w-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Column 3 - Right Content */}
        <div className="flex flex-col lg:w-[35%] gap-6">

          {/* Heading + Description */}
          <div className="flex-1 bg-white rounded-xl shadow-md border border-[#BFC4C8] p-8 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-[#0A66A3]">
              WHO <span className="text-[#0B0B0C]">WE ARE</span>
            </h2>

            <p className="mt-4 text-[#0B0B0C] text-base opacity-90 leading-relaxed">
              Angel Packers & Movers is one of India’s most trusted relocation
              service providers. With years of experience, a trained workforce,
              and a customer-first approach, we make shifting stress-free and
              absolutely secure.
              <br /><br />
              Whether it’s home, office, vehicle, or long-distance relocation,
              we ensure reliable packing, fast transportation, and on-time
              delivery. Your belongings are handled with extreme care as if
              they were our own.
            </p>
          </div>

          {/* Two Feature Cards */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">

            {/* Flexible Scheduling */}
            <div className="sm:w-1/2 bg-[#0A66A3] text-white flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <FaCalendarAlt size={40} className="mb-4 text-white" />
              <h3 className="text-lg font-bold uppercase tracking-wide text-center">
                Flexible Scheduling
              </h3>
              <p className="text-sm mt-2 text-center opacity-90 leading-relaxed">
                We operate as per your preferred time—weekends, holidays & more.
              </p>
            </div>

            {/* Fully Insured Moves */}
            <div className="sm:w-1/2 bg-[#0B0B0C] text-white flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <FaShieldAlt size={40} className="mb-4 text-white" />
              <h3 className="text-lg font-bold uppercase tracking-wide text-center">
                Fully Insured
              </h3>
              <p className="text-sm mt-2 text-center opacity-80 leading-relaxed">
                Every relocation comes with complete insurance protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
