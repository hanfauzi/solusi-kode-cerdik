import Image from "next/image";

const TentangKami = () => {
  return (
    <section id="tentang" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-0">
        {/* ================= MOBILE LAYOUT ================= */}
        <div className="lg:hidden flex flex-col items-center text-center gap-8">
          {/* IMAGE */}
          <div className="w-screen h-full">
            <Image
              src="/assets/tentang/cewe-cowo-2-mobile.svg"
              alt="Team collaboration"
              width={375}
              height={376}
              className="w-full h-full rounded-3xl"
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-[#027DDC] leading-snug">
              Mitra Strategis dalam Ekosistem Pembayaran Digital
            </h2>

            <p className="text-[#06334C] text-[12px] leading-relaxed">
              Solusi Kode Cerdik hadir sebagai jembatan teknologi yang
              menghubungkan ribuan biller dengan pelaku bisnis di seluruh
              Indonesia. Kami memahami bahwa kecepatan dan keandalan adalah
              kunci dalam industri pembayaran digital. <br /> <br />
              Dengan pengalaman bertahun-tahun dalam pengembangan infrastruktur
              PPOB, kami berkomitmen untuk menyediakan solusi yang tidak hanya
              canggih secara teknologi, tetapi juga mudah diakses dan
              menguntungkan bagi mitra bisnis kami.
            </p>
          </div>

          {/* VISI */}
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/assets/tentang/visi.svg"
              alt="Visi Kami"
              width={100}
              height={100}
            />
            <h3 className="text-lg font-bold text-[#027DDC]">Visi Kami</h3>
            <p className="text-[12px] text-[#06334C] leading-relaxed px-4">
              Menjadi Biller Aggregator PPOB terpercaya yang berperan aktif
              dalam pengembangan ekosistem pembayaran digital nasional.
            </p>
          </div>

          {/* MISI */}
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/assets/tentang/misi.svg"
              alt="Misi Kami"
              width={100}
              height={100}
            />
            <h3 className="text-lg font-bold text-[#027DDC]">Misi Kami</h3>
            <p className="text-[12px] text-[#06334C] leading-relaxed px-4">
              Menyediakan layanan pembayaran digital yang aman, mudah, dan
              terintegrasi untuk mendukung pertumbuhan bisnis dan kenyamanan
              masyarakat.
            </p>
          </div>
        </div>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="hidden lg:flex flex-row items-center gap-20">
          {/* IMAGE */}
          <div className="w-1/2 relative">
            <Image
              src="/assets/tentang/cewe-cowo-2.svg"
              alt="Team collaboration"
              width={588}
              height={826}
              className="w-full h-auto rounded-3xl"
            />
          </div>

          {/* CONTENT */}
          <div className="max-w-157.5 flex flex-col gap-7.5">
            <div className="flex flex-col gap-8">
              <h2 className="text-[48px] font-bold text-[#0473BF] leading-tight">
                Mitra Strategis dalam Ekosistem Pembayaran Digital
              </h2>

              <p className="text-[#052B63] text-lg leading-relaxed">
                Solusi Kode Cerdik hadir sebagai jembatan teknologi yang
                menghubungkan ribuan biller dengan pelaku bisnis di seluruh
                Indonesia. Kami memahami bahwa kecepatan dan keandalan adalah
                kunci dalam industri pembayaran digital. <br /> <br />
                Dengan pengalaman bertahun-tahun dalam pengembangan
                infrastruktur PPOB, kami berkomitmen untuk menyediakan solusi
                yang tidak hanya canggih secara teknologi, tetapi juga mudah
                diakses dan menguntungkan bagi mitra bisnis kami.
              </p>
            </div>

            {/* VISI */}
            <div className="flex gap-4">
              <Image
                src="/assets/tentang/visi.svg"
                alt="Visi Kami"
                width={120}
                height={120}
              />
              <div>
                <h3 className="text-2xl font-bold text-[#0473BF]">Visi Kami</h3>
                <p className="text-[#1E293A] leading-relaxed">
                  Menjadi Biller Aggregator PPOB terpercaya yang berperan aktif
                  dalam pengembangan ekosistem pembayaran digital nasional.
                </p>
              </div>
            </div>

            {/* MISI */}
            <div className="flex gap-4">
              <Image
                src="/assets/tentang/misi.svg"
                alt="Misi Kami"
                width={120}
                height={120}
              />
              <div>
                <h3 className="text-2xl font-bold text-[#0473BF]">Misi Kami</h3>
                <p className="text-[#020407] leading-relaxed">
                  Menyediakan layanan pembayaran digital yang aman, mudah, dan
                  terintegrasi untuk mendukung pertumbuhan bisnis dan kenyamanan
                  masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
