// import React from 'react';

// const Services = () => {
//   return (
//     <div>
//       <h2>Services</h2>
//       {/* Add functionality to list, add, edit, and delete services */}
//     </div>
//   );
// };

// export default Services;


import React, { useState, useEffect } from 'react';
import { getServices } from '../../api';

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await getServices();
      setServices(response.data);
    };
    fetchServices();
  }, []);

  return (
    <div>
      <h2>Services</h2>
      <ul>
        {services.map(service => (
          <li key={service._id}>{service.name}: {service.description} - ${service.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
