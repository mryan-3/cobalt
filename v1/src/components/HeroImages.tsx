import React from "react";

interface ImageProps {
    src: string;
    alt: string
    width?: number;
    height?: number;
}

const HeroImage: React.FC<ImageProps> = ({ src, alt, width, height }) => {
    return <img src={src} alt={alt} width={width} height={height} />
}

export default HeroImage
