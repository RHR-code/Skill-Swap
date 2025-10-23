import React from "react";
import ProviderCard from "./ProviderCard";

const TopProvider = ({ provider }) => {
  return (
    <div className="pb-40">
      <div data-aos="fade-up">
        <h1 className="text-3xl font-bold text-accent text-center py-10">
          Our Top Rated Providers
        </h1>
      </div>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-10 "
      >
        {provider.map((data) => (
          <ProviderCard key={data.providerId} data={data} />
        ))}
      </div>
    </div>
  );
};

export default TopProvider;
