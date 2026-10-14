import { useState } from "react";

const galleryImages = [
  "./src/assets/img1.svg",
  "./src/assets/img2.svg",
  "./src/assets/img3.svg",
  "./src/assets/img4.svg",
];

const CompanyGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full bg-[#12123a] ">

      <div
        className="
          mx-auto
          w-full
          max-w-[360px]
          rounded-[14px]
          bg-[#1B234D]
          px-[20px]
          py-[12px]
          sm:px-[20px]
          sm:py-[14px]
        "
      >

        {/* Heading */}
        <h2
          className="
            
            text-[20px]
            font-medium
            leading-[115%]
            text-white
          "
        >
          Company Gallery
        </h2>


        {/* Main Image */}
        <div
          className="
            mt-[15px]
            h-[218px]
            w-full
            overflow-hidden
            rounded-[10px]
            sm:h-[218px]
          "
        >
          <img
            key={activeImage}
            src={galleryImages[activeImage]}
            alt={`Company gallery ${activeImage + 1}`}
            className="
              h-full
              w-full
              object-cover
              transition-all
              duration-500
              ease-out
            "
          />
        </div>


        {/* Thumbnails */}
        <div className="mt-[11px] flex w-full items-center gap-[10px]">

          {galleryImages.map((image, index) => (

            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`
                group
                h-[51px]
                min-w-0
                flex-1
                overflow-hidden
                rounded-[9px]
                border
                transition-all
                duration-300
                ${
                  activeImage === index
                    ? "border-[#60C9CE]"
                    : "border-transparent"
                }
              `}
            >
              <img
                src={image}
                alt={`Gallery thumbnail ${index + 1}`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </button>

          ))}

        </div>


        {/* Pagination */}
        <div className="mt-[18px] flex items-center justify-center gap-[6px]">

          {galleryImages.map((_, index) => (

            <button
              key={index}
              type="button"
              aria-label={`Show image ${index + 1}`}
              onClick={() => setActiveImage(index)}
              className={`
                h-[7px]
                rounded-full
                transition-all
                duration-300
                ${
                  activeImage === index
                    ? "w-[25px] bg-[#60C9CE]"
                    : "w-[25px] bg-white"
                }
              `}
            />

          ))}

        </div>

      </div>

    </div>
  );
};

export default CompanyGallery;