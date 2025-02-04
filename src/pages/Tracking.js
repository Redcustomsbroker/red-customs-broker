import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Tracking() {
  const [trackingData, setTrackingData] = useState([]);

  useEffect(() => {
    axios.get('/api/tracking')
      .then(response => setTrackingData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Track Your Shipment</h1>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {trackingData.map(item => (
          <SwiperSlide key={item.id}>
            <div>
              <h3>{item.status}</h3>
              <p>{item.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Tracking;