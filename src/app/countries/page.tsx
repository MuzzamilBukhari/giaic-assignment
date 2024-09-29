import countryData from "@/countries";
import Link from "next/link";
import React from "react";

const Countries = () => {
  const countries = Object.keys(countryData);

  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Country List</h1>
      <div className="flex justify-center items-center gap-4 flex-col">
        {countries.map((country) => (
          <Link
            href={`/countries/${country}`}
            className="bg-gray-950 rounded-md w-[250px] h-[50px] flex justify-center items-center"
            key={country}
          >
            {country}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
