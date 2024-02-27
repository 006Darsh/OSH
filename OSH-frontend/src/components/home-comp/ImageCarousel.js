import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ImageCarousel.css";
import { Link } from "react-router-dom";

const ImageCarousel = ({ item, prop }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const customItemStyle = {
    paddingLeft: "10px", // Adjust the left padding to reduce spacing
    paddingRight: "10px", // Adjust the right padding to reduce spacing
  };

  return (
    <div className="multi-image-carousel">
      <Carousel responsive={responsive}>
        {prop === "team" ? (
          <>
            {item.map((item, index) => (
              <div className="img-car-con" key={index} style={customItemStyle}>
                <Link
                  to={{
                    pathname: `/team-member/details/${item._id}`,
                  }}
                >
                  <span className="sessionAvatar">{item.name.charAt(0)}</span>
                  <span className="sessionname">{item.name}</span>
                </Link>
                {/* <image src={image} alt={`Image ${index}`} /> */}
              </div>
            ))}
          </>
        ) : (
          <>
            {item.map((item, index) => (
              <div className="img-car-con" key={index} style={customItemStyle}>
                <Link
                  to={{
                    pathname: `/speaker/details/${item._id}`,
                  }}
                >
                  <span className="sessionAvatar">{item.name.charAt(0)}</span>
                  <span className="sessionname">{item.name}</span>
                </Link>
                {/* <image src={image} alt={`Image ${index}`} /> */}
              </div>
            ))}
          </>
        )}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
