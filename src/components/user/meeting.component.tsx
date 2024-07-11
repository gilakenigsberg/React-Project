// import React, { useState } from 'react';

// const BookAppointment = () => {
//   const [service, setService] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [note, setNote] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to submit the appointment
//   };

//   return (
//     <div>
//       <h2>Book an Appointment</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Service:
//           <input type="text" value={service} onChange={(e) => setService(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Date:
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Time:
//           <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Phone:
//           <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Note:
//           <textarea value={note} onChange={(e) => setNote(e.target.value)}></textarea>
//         </label>
//         <br />
//         <button type="submit">Book</button>
//       </form>
//     </div>
//   );
// };

// export default BookAppointment;


// import React, { useState } from 'react';
// import { addAppointment } from '../../api';

// const BookAppointment = () => {
//   const [service, setService] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [note, setNote] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newAppointment = { service, date, time, name, phone, note };
//     await addAppointment(newAppointment);
//     alert('Appointment booked successfully!');
//   };

//   return (
//     <div>
//       <h2>Book an Appointment</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Service:
//           <input type="text" value={service} onChange={(e) => setService(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Date:
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Time:
//           <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Phone:
//           <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Note:
//           <textarea value={note} onChange={(e) => setNote(e.target.value)}></textarea>
//         </label>
//         <br />
//         <button type="submit">Book</button>
//       </form>
//     </div>
//   );
// };

// export default BookAppointment;

// with material-UI:

// import React, { useState } from 'react';
// import { addAppointment } from '../../api';
// import { Button, TextField, Typography, Container } from '@mui/material';

// const BookAppointment = () => {
//   const [service, setService] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [note, setNote] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newAppointment = { service, date, time, name, phone, note };
//     await addAppointment(newAppointment);
//     alert('Appointment booked successfully!');
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>Book an Appointment</Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Service"
//           value={service}
//           onChange={(e) => setService(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Date"
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           fullWidth
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <TextField
//           label="Time"
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           fullWidth
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <TextField
//           label="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Note"
//           value={note}
//           onChange={(e) => setNote(e.target.value)}
//           fullWidth
//           margin="normal"
//           multiline
//           rows={4}
//         />
//         <Button type="submit" variant="contained" color="primary" fullWidth>
//           Book
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default BookAppointment;


// with payment:
import React, { useState } from 'react';
import { addAppointment } from '../../api';
import { Button, TextField, Typography, Container } from '@mui/material';
import Modal from 'react-modal';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Appointment } from '../../interfaces/appointmentInterface';

const BookAppointment = () => {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newAppointment:Appointment = { service, name, date, time, phone, note };
    await addAppointment(newAppointment);
    setShowModal(true);
  };

  const handlePaymentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle payment processing here
    alert('Payment details submitted successfully!');
    setShowModal(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Book an Appointment</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Service"
          value={service}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setService(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Time"
          type="time"
          value={time}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTime(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Note"
          value={note}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNote(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Book
        </Button>
      </form>

      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <h2>Enter Payment Details</h2>
        <form onSubmit={handlePaymentSubmit}>
          <Cards
            number={cardNumber}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
          <TextField
            label="Card Number"
            value={cardNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCardNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            name="number"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Expiry Date"
            value={expiry}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            name="expiry"
            fullWidth
            margin="normal"
          />
          <TextField
            label="CVC"
            value={cvc}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            name="cvc"
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit Payment
          </Button>
        </form>
      </Modal>
    </Container>
  );
};

export default BookAppointment;
