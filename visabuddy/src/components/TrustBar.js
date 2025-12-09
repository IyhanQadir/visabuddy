import React, { useEffect, useRef } from 'react';

const TrustBar = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach(counter => {
      const target = counter.textContent;
      counter.textContent = '0';
      let count = 0;
      const increment = setInterval(() => {
        const num = +target.replace(/[^\d]/g, '');
        count += Math.ceil(num / 50);
        if (count >= num) {
          counter.textContent = target;
          clearInterval(increment);
        } else {
          counter.textContent = count + (target.includes('%') ? '%' : '+');
        }
      }, 40);
    });
  }, []);

  return (
    <section className="trust-bar">
      <div className="stats">
        <div className="stat">
          <h3 className="counter" ref={el => countersRef.current[0] = el}>5000+</h3>
          <p>Successful Applications</p>
        </div>
        <div className="stat">
          <h3 className="counter" ref={el => countersRef.current[1] = el}>98%</h3>
          <p>Approval Rate</p>
        </div>
        <div className="stat">
          <h3 className="counter" ref={el => countersRef.current[2] = el}>15+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat">
          <h3 className="counter" ref={el => countersRef.current[3] = el}>30+</h3>
          <p>Countries Served</p>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;