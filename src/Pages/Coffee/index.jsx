import React from "react";
import { FcDataConfiguration } from "react-icons/fc";
import { GiSettingsKnobs } from "react-icons/gi";
import DataCafe from "../../database";

const index = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24">
      <form
        action=""
        method="get"
        className="flex justify-center gap-5 items-center"
      >
        <div className="relative my-6">
          <input
            id="id-s03"
            type="search"
            name="id-s03"
            placeholder="Search here"
            aria-label="Search content"
            className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            aria-label="Search icon"
            role="graphics-symbol"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <div>
          <button className="btn btn-primary">
            <GiSettingsKnobs />
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-10">
        {DataCafe.map((cafe, index) => {
          return (
            <div
              key={index}
              className="p-10 flex flex-col items-start space-y-2"
            >
              <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                <figure>
                  <img
                    src={cafe.Image}
                    alt="card image"
                    className="aspect-video w-full"
                  />
                </figure>
                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-xl font-medium text-slate-700">
                      {cafe["Nama Kafe"]}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        className="flex text-amber-400"
                        role="img"
                        aria-label="star"
                      >
                        <span aria-hidden="true">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </span>
                      <p className=" text-slate-400">{cafe["Rating Kafe"]}</p>
                    </div>
                  </header>
                  <p>{cafe.Description}</p>
                </div>
                <div className="flex justify-end p-6 pt-0">
                  <a
                    className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-secondary px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                    href={`/coffee/${cafe.id}`}
                  >
                    Lihat!
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default index;
