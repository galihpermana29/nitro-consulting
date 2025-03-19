import React from 'react';

interface BannerProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  titleColor?: string;
  subtitleColor?: string;
}

export default function Banner({
  backgroundImage,
  title,
  subtitle,
  titleColor = 'text-white',
  subtitleColor = 'text-white'
}: BannerProps) {
  return (
    <>
      {/* Large Screen Banner */}
      <section className="single-banner h-screen relative hidden md:block">
        <div className="container-fluid no-padding h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
          </div>

          <div className="backdrop-banner"></div>

          <div className="wordingSingleBanner flex items-center h-full">
            <div>
              <h3 className={titleColor}>{title}</h3>
              {subtitle && <p className={subtitleColor}>{subtitle}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Banner */}
      <section className="single-banner-small h-screen relative md:hidden">
        <div className="container-fluid no-padding h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
          </div>

          <div className="backdrop-banner"></div>

          <div className="wordingSingleBanner flex items-center h-full">
            <div>
              <h3 className={`text-2xl font-bold ${titleColor}`}>{title}</h3>
              {subtitle && <p className={`mt-2 ${subtitleColor}`}>{subtitle}</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
