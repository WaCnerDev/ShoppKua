import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AbsBar = ({
  abs = [
    {
      msgPromotion: "Get 10% off your first order!",
      emoji: "🎉",
      code: "WELCOME10",
    },
    {
      msgPromotion: "Free shipping on orders over $50!",
      emoji: "🚚",
      code: "FREESHIP",
    },
    {
      msgPromotion: "Buy 1 Get 1 Free on select items!",
      emoji: "🛍️",
      code: "BOGO",
    },
    {
      msgPromotion: "Limited time offer: 20% off sitewide!",
      emoji: "🔥",
      code: "SAVE20",
    },
  ],
  timerInSec = 5,
}) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentAdIndex === abs.length - 1) {
        setCurrentAdIndex(0);
      } else {
        setCurrentAdIndex((prevIndex) => prevIndex + 1);
      }
    }, timerInSec * 1000);
    return () => clearInterval(interval);
  }, [currentAdIndex, abs]);

  return (
    <div className="container-fluid bg-success">
      <div
        key={currentAdIndex}
        className="text-white text-center p-2 fade-in"
        style={{ animation: "fadeIn 1s" }}
      >
        {abs[currentAdIndex].emoji && <span>{abs[currentAdIndex].emoji} </span>}
        {abs[currentAdIndex].msgPromotion}{" "}
        {abs[currentAdIndex].code && (
          <span>
            Use the next code: <strong>{abs[currentAdIndex].code}</strong>
          </span>
        )}
      </div>
    </div>
  );
};

AbsBar.propTypes = {
  abs: PropTypes.arrayOf(
    PropTypes.shape({
      msgPromotion: PropTypes.string.isRequired,
      emoji: PropTypes.string,
      code: PropTypes.string,
      timer: PropTypes.number,
    })
  ),
};
