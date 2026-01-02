import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-linear-to-br from-purple-50 to-white lg:pb-24"
    >
      <div className="container mx-auto lg:px-12 h-full pt-20 md:pt-24 lg:pt-28">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col pt-4 pb-8 relative">
          <div className="space-y-6 text-center mb-8 relative z-10">
            <h1 className="font-extrabold text-[32px] leading-tight text-[#027DDC]">
              Solusi Pembayaran <br />
              PPOB Terpercaya <br />
              untuk Kebutuhan Bisnis Anda
            </h1>

            <p className="text-[12px] text-[#1E293A] leading-relaxed px-2">
              Solusi Kode Cerdik menghadirkan platform PPOB yang andal, aman,
              dan mudah diintegrasikan untuk mendukung berbagai kebutuhan
              transaksi digital. Kami membantu mitra bisnis memperluas layanan
              pembayaran dengan sistem yang stabil, efisien, dan siap
              berkembang.
            </p>

            <a href="#hubungi-kami">
              <button className="text-white mb-5 bg-[#027DDC] hover:bg-[#027DDC]/90 font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 w-[90%] mx-auto block">
                Hubungi Kami
              </button>
            </a>
            <a href="#layanan">
              <button className="text-[#1E293A] bg-white border border-[#5AEDC9] font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 w-[90%] mx-auto block">
                Lihat Layanan
              </button>
            </a>
          </div>

          <div className="relative w-full -mt-32 mb-2 z-0 left-0">
            <Image
              src="/assets/hero/cewe-cowo-mobile.svg"
              alt="Business professionals discussing"
              height={482}
              width={375}
              className="w-full h-auto max-w-xl mx-auto"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <div className="space-y-6 relative z-10">
            <h1 className="font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#027DDC]">
              Solusi Pembayaran PPOB Terpercaya untuk Kebutuhan Bisnis Anda
            </h1>

            <p className="text-lg text-justify text-[#1E293A] leading-relaxed">
              Solusi Kode Cerdik menghadirkan platform PPOB yang andal, aman,
              dan mudah diintegrasikan untuk mendukung berbagai kebutuhan
              transaksi digital. Kami membantu mitra bisnis memperluas layanan
              pembayaran dengan sistem yang stabil, efisien, dan siap
              berkembang.
            </p>
            <div className="text-[#004740]">
              <a href="#hubungi-kami">
                <button className="text-white bg-[#027DDC] hover:bg-[#027DDC]/90 cursor-pointer font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                  Hubungi Kami
                </button>
              </a>
              <a href="#layanan" className="ml-4">
                <button className="bg-transparent border-2 text-[#1E293A] border-[#5AEDC9] cursor-pointer font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                  Lihat Layanan
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Image positioned at top-right corner */}
          <div
            className="lg:absolute lg:right-0 lg:top-0 lg:w-[48%] z-20 pointer-events-none"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <Image
              src="/assets/hero/cewe-cowo.svg"
              alt="Business professionals discussing"
              className="w-full h-full object-cover"
              width={817}
              height={707}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
