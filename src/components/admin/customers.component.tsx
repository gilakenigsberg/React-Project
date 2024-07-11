// import React from 'react';

// const Customers = () => {
//   return (
//     <div>
//       <h2>Customers</h2>
//       {/* Add functionality to list and manage customers */}
//     </div>
//   );
// };

// export default Customers;


import React, { useState, useEffect } from 'react';
import { getCustomers } from '../../api';

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await getCustomers();
      setCustomers(response.data);
    };
    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer._id}>{customer.name} - {customer.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
