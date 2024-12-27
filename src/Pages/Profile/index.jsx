import Box from "../../Components/Cards/Box";
import TouchBar from "../../Components/Navbar/TouchBar";
import DataCafe from "../../database";
const index = () => {
  const user = "Satria";

  const user_data = [
    {
      value: "28K+",
      description: "Total Suka",
    },
    { value: "5K+", description: "Komentar" },
    { value: "10K+", description: "Pengikut" },
    { value: "130", description: "Active Days" },
    { value: "120", description: "Suka/hari" },
    { value: "1.17M+", description: "Konten Disimpan" },
  ];

  return (
    <section className="flex flex-col mx-32 pt-36 gap-20 min-h-screen">
      <TouchBar />
      <div className="flex gap-5 items-center">
        <div>
          <div className="flex flex-col gap-10">
            <h1 className="text-4xl text-white mx-14">
              Hi {user}! Selamat Datang Kembali. 🖐️
            </h1>
            <h2 className="text-5xl max-w-[35rem]">
              Statistik Lengkapmu Kepada Komunitas
            </h2>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center justify-center py-16">
              {user_data.map((item, index) => (
                <Box
                  key={index}
                  value={item.value}
                  description={item.description}
                  highlighted={item.highlighted}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-5xl max-w-[35rem]">Kafe Yang Di Upload</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-10">
          {DataCafe.slice(0, 3).map((cafe, index) => {
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
                      <h3 className="text-xl font-medium text-slate-700 line-clamp-1">
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
                    <p className="line-clamp-4">{cafe.Description}</p>
                  </div>
                  <div className="flex justify-end p-6 pt-0">
                    <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-secondary px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                      <span>Lihat!</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default index;
