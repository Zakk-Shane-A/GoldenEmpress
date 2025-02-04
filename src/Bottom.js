import React, { useEffect, useRef } from "react";
import "./css/Bottom.css"; 
import icon_deliver from './icon/shipped.png';
import icon_payment from './icon/deal.png';
import icon_cashback from './icon/cashback.png';
import icon_customerservices from './icon/customer-service.png';

function Bottom() {
  const boxesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 20% of the element is visible
    );

    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bottom">
    <div className="bottom1_main">
      <div className="bottom_wrapper">
        <div className="bottom1_containers">
          <div
            className="bottom1_boxes hidden"
            ref={(el) => (boxesRef.current[0] = el)}
          >
            <img src={icon_deliver} alt="icon delivery" width="100px" />
            <h2>Free Shipping</h2>
            <span>On all orders start at 50$</span>
          </div>

          <div
            className="bottom1_boxes hidden"
            ref={(el) => (boxesRef.current[1] = el)}
          >
            <img src={icon_payment} alt="icon payment" width="100px" />
            <h2>Secure Payment</h2>
            <span>We ensure secure payment</span>
          </div>

          <div
            className="bottom1_boxes hidden"
            ref={(el) => (boxesRef.current[2] = el)}
          >
            <img src={icon_cashback} alt="icon cashback" width="100px" />
            <h2>100% Money Back</h2>
            <span>30 Days Return Policy</span>
          </div>

          <div
            className="bottom1_boxes hidden"
            ref={(el) => (boxesRef.current[3] = el)}
          >
            <img src={icon_customerservices} alt="icon customer service" width="100px" />
            <h2>Online Support</h2>
            <span>24/7 Dedicated Support</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Bottom;
