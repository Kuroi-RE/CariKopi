import React from "react";
import database from "../../../database";
import { useParams } from "react-router-dom";
import EmbedMaps from "../../../Components/Maps/EmbedMaps";

const CoffeeID = () => {
  let { id } = useParams();
  return (
    <div className="min-h-screen py-32">
      {database.map((data, key) => {
        if (id == data.id) {
          return (
            <div key={key} className="flex flex-col">
              <section className="flex flex-row items-center justify-center gap-10">
                <div>
                  <img
                    width={400}
                    height={400}
                    src={data.Image}
                    alt={data["Nama Kafe"]}
                  />
                </div>
                <div className="max-w-96 flex flex-col gap-4">
                  <div>
                    <h1 className="text-3xl font-semibold">
                      {data["Nama Kafe"]}
                    </h1>
                    <p className="text-sm text-[#717075]">{data.Description}</p>
                  </div>
                  <div className="flex gap-4">
                    <button className="btn btn-primary">Lihat</button>
                    <button
                      className="btn btn-info"
                      onClick={() => window.open(data.maps)}
                    >
                      Direction
                    </button>
                  </div>
                </div>
              </section>
              <section className="flex flex-row ">
                <div className="max-w-[30rem]">
                  <EmbedMaps linkMaps={data.maps} />
                </div>
              </section>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CoffeeID;

// {database.map((data, key) => {
//   if (id == data.id) {
//     return (
//       <div key={key}>
//         <h1>{data["Nama Kafe"]}</h1>
//       </div>
//     );
//   }
// })}
