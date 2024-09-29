import React from "react";
import countryData from "@/countries";
import Link from "next/link";

type Country = keyof typeof countryData;

const CountryName = ({ params }: { params: { country_name: string } }) => {
  const countryName = params.country_name;

  const isValidCountry = (countryName: string): countryName is Country => {
    return countryName in countryData;
  };
  return isValidCountry(countryName) ? (
    <div className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-6xl font-bold">{countryData[countryName].name}</h1>
      <div className="w-[300px] h-[300px] bg-gray-950 rounded-xl flex justify-center items-center flex-col gap-4">
        <div>
          <h2 className="text-2xl font-semibold">
            Population : {countryData[countryName].population}
          </h2>
          <h2 className="text-2xl font-semibold">
            Capital : {countryData[countryName].capital}
          </h2>
        </div>
        <Link href={"/countries"} className="bg-cyan-600 px-4 py-2 rounded-lg">
          Back to countries page
        </Link>
      </div>
    </div>
  ) : (
    <div className="text-center text-4xl font-bold">Country not found</div>
  );
};

export default CountryName;
