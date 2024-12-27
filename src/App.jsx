import Feature from "./Components/Features/Features";
import { FaCoffee } from "react-icons/fa";
import Testimonial from "./Components/Review/Review";
import BrandSupport from "./Components/Support/SupportBy";
import HeroCarousel from "./Components/Carousel/HeroCarousel";

function App() {
  const FeatureData = [
    {
      title: "By Community to Community",
      description:
        "Dari komunitas untuk komunitas. Kami percaya bahwa kekuatan komunitas dapat membantu satu sama lain untuk menemukan tempat terbaik untuk bersantai dan menikmati secangkir kopi.",
      icons: <FaCoffee />,
    },
    {
      title: "Get new Friends",
      description:
        "Dapatkan teman baru. Bergabunglah dengan komunitas kami dan temukan teman-teman baru yang memiliki minat yang sama dalam menikmati kopi dan suasana kafe.",
      icons: <FaCoffee />,
    },
    {
      title: "Easy to Search",
      description:
        "Mudah untuk mencari. Dengan fitur pencarian kami, Anda dapat dengan mudah menemukan kafe yang sesuai dengan preferensi Anda, baik dari segi lokasi, suasana, maupun menu yang ditawarkan.",
      icons: <FaCoffee />,
    },
  ];

  const DataCafe = [
    {
      "Nama Kafe": "et al Coffee Purwokerto",
      "Rating Kafe": 4.9,
      Image: "/images/coffee.jpg",
      Description:
        "Kafe ini menawarkan berbagai jenis kopi yang disajikan dengan cara yang unik. Dengan suasana yang nyaman dan pemandangan yang indah, et al Coffee Purwokerto adalah tempat yang sempurna untuk bersantai dan menikmati sec",
    },
    {
      "Nama Kafe": "Kedai Kopi Kulo",
      "Rating Kafe": 4.8,
      Image: "/images/coffee.jpg",
      Description:
        "Kedai Kopi Kulo adalah tempat yang sempurna untuk menikmati kopi dengan suasana yang nyaman. Dengan berbagai jenis kopi yang disajikan dengan cara yang unik, Kedai Kopi Kulo menawarkan pengalaman ngopi yang tak terlupakan.",
    },
    {
      "Nama Kafe": "et al Coffee Purwokerto",
      "Rating Kafe": 4.9,
      Image: "/images/coffee.jpg",
      Description:
        "Kafe ini menawarkan berbagai jenis kopi yang disajikan dengan cara yang unik. Dengan suasana yang nyaman dan pemandangan yang indah, et al Coffee Purwokerto adalah tempat yang sempurna untuk bersantai dan menikmati sec",
    },
  ];
  return (
    <main className="min-h-screen overflow-hidden">
      <section>
        <div className="hero pt-24">
          <div className="hero-content text-neutral-content text-center gap-28 md:gap-48 flex-col md:flex-row">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Get your Cafe Experience in Purwokerto
              </h1>
              <p className="mb-5 text-sm">
                Purwokerto dipenuhi dengan berbagai kafe yang menawarkan cita
                rasa dan pengalaman unik. Dari sudut kota yang nyaman hingga
                tempat ngopi dengan pemandangan indah, kami membantu Anda
                menemukan kafe dengan rating terbaik dan suasana yang sesuai
                dengan keinginan Anda.
              </p>

              <form action="/coffee" className="flex justify-center gap-5">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-24 md:w-auto"
                  />
                </div>
                <button type="submit" className="btn">
                  Search Cafe
                </button>
              </form>
            </div>

            <div className="max-w-sm md:max-w-xl ">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          {FeatureData.map((kopi, index) => {
            return (
              <div
                key={index}
                className="bg-[#171717] p-10 rounded-lg shadow-lg flex flex-col items-start space-y-2 hover:bg-[#1f1f1f] transition duration-300 "
              >
                <Feature
                  title={kopi.title}
                  description={kopi.description}
                  icons={kopi.icons}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col pt-16">
        <div className="mx-20">
          <h1 className="text-6xl">Touch in Brand</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 px-10">
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
                    <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-secondary px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                      <span>Lihat!</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid place-items-center">
          <a className="btn btn-success px-24" href="/coffee">
            Lihat Semua
          </a>
        </div>
      </section>

      <section className="grid place-items-center">
        <div className="w-full overflow-x-hidden py-20">
          <BrandSupport />
        </div>
      </section>

      <section className="grid place-items-center">
        <div className="w-[70vw] overflow-x-hidden py-20">
          <Testimonial />
        </div>
      </section>
    </main>
  );
}

export default App;
