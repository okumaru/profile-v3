import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  width?: undefined;
  height?: undefined;
  alt: string;
  src: string;
  // any props that come into the component
}

const variants = {
  loading: {
    scale: 1.4,
    filter: "blur(10px)",
  },
  loaded: {
    scale: 1,
    filter: "blur(0px)",
  },
};

const ImageBlur = ({ width, height, alt, src }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      variants={variants}
      initial="loading"
      animate={loaded ? "loaded" : "loading"}
      style={{ originX: 0.5, originY: 0.5}}
      transition={{ duration: 0.6 }}
			className="mb-4 lg:mb-8"
    >
      <Image
        width={width}
        height={height}
        alt={alt}
        src={src}
        onLoadingComplete={() => setLoaded(true)}
        className="bg-center bg-contain rounded-md md:bg-contain content-img mx-auto"
      />
    </motion.div>
  );
};

export default ImageBlur;
