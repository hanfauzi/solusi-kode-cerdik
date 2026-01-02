import FormHubungiKami from "./FormHubungiKami";
import hubungiKamiData from "../data/hubungi-kami.json";
import Image from "next/image";

export default function HubungiKami() {
  const { location, telephone, email, pinpoint } = hubungiKamiData;

  return (
    <section
      id="hubungi-kami"
      className="sleek-zoom-90 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-20"
      style={{
        background:
          "linear-gradient(133.14deg, rgba(90, 237, 201, 0) 33.67%, #02F5DB 131.22%), #ffffff",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="space-y-8 w-full">
            <div>
              <h2 className="font-urbanist font-extrabold text-2xl md:text-3xl text-[#0473BF] mb-2.5">
                Siap Menjadi Mitra Bisnis Anda
              </h2>
              <p className="font-urbanist text-[#06334C] w-[90%] md:w-full text-sm md:text-base leading-relaxed">
                Kami siap membantu mengembangkan bisnis Anda melalui solusi PPOB
                yang handal dan terintegrasi.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Kantor */}
              <div className="flex items-start gap-4">
                <Image
                  src="/assets/hubungi/location.svg"
                  alt="Lokasi"
                  width={80}
                  height={80}
                />
                <div>
                  <h3 className="font-urbanist font-bold text-lg mb-2 text-[#0473BF]">
                    Kantor Kami
                  </h3>
                  <p className="font-inter text-sm md:text-base text-[#06334C] w-3/4">
                    {location}
                  </p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start gap-4">
                <Image
                  src="/assets/hubungi/phone.svg"
                  alt="phone"
                  width={80}
                  height={80}

                />
                <div>
                  <h3 className="font-urbanist font-bold text-lg mb-2 text-[#0473BF]">
                    Telepon
                  </h3>
                  <p className="font-inter text-sm md:text-base text-[#06334C]">
                    {telephone.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Image
                  src="/assets/hubungi/email.svg"
                  alt="email"
                  width={80}
                  height={80}

                />
                <div>
                  <h3 className="font-urbanist font-bold text-lg mb-2 text-[#0473BF]">
                    Email
                  </h3>
                  <p className="font-inter text-sm md:text-base text-[#06334C]">
                    {email.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            {/* FIXED MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 md:w-full">
              <iframe
                src={pinpoint}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="w-full">
            <FormHubungiKami />
          </div>
        </div>
      </div>
    </section>
  );
}
