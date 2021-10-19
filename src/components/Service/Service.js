import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Service = () => {
  const { serviceId } = useParams();
  const [serviceDetail, setServiceDetail] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServiceDetail(data));
  }, []);

  const matchedId = serviceDetail.find(
    (service) => service.id === parseInt(serviceId)
  );
  console.log(matchedId);

  return (
    <div>
      <div className="max-w-lg mt-8 mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <img className="rounded-t-lg" src={matchedId?.img} alt="" />

          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {matchedId?.name}
            </h5>

            <p className="font-normal text-gray-700 mb-3">
              {matchedId?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
