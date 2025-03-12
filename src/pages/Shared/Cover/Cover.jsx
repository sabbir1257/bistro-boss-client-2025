import { Parallax } from "react-parallax";

const Cover = ({ img, title, details }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div>
        <div
          className="bg-cover bg-center md:h-[572px] h-[400px] w-full flex flex-col justify-center items-center text-center"
        >
          <div className="md:p-8 text-white bg-black bg-opacity-50 py-4 rounded-lg w-11/12 max-w-3xl h-auto md:h-[333px] flex items-center justify-center">
            <div>
              <h1 className="mb-4 text-2xl font-bold md:text-4xl">{title}</h1>
              <p className="px-4 mb-8 text-sm text-left md:text-base">
                {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
