import React, { useEffect, useState } from "react";
import { addAppointment, getServices } from "../../api";
import {
  Button,
  TextField,
  Typography,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Modal from "react-modal";
import { Appointment } from "../../interfaces/appointmentInterface";
import { usePaymentInputs, PaymentInputsWrapper } from "react-payment-inputs";
import { images, CardImages } from "react-payment-inputs/images";
import styled from "styled-components";
import { ariaHidden } from "@mui/material/Modal/ModalManager";
import axios from "axios";

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  width: 100%;
`;

const BookAppointment = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState<Error | null>(null);
  const [service, setService] = useState<Service | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailDomains = [
    "gmail.com",
    "yahoo.com",
    "yahoo.co.il",
    "walla.co.il",
    "outlook.com",
    "hotmail.com",
    "bezeqint.net",
    "012.net.il",
    "netvision.net.il",
    "smile.net.il",
    "zahav.net.il",
    "barak.net.il",
    "actcom.co.il",
  ];
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const phonePattern = /^0[2-9]\d{7}$|^05\d{8}$|^077\d{7}$/;
  const [note, setNote] = useState("");
  const [showModal, setShowModal] = useState(false);

  const validateEmail = (value: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError("כתובת מייל לא תקינה");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);

    const [localPart, domainPart] = value.split("@");

    if (domainPart && localPart) {
      const filteredSuggestions = emailDomains
        .filter((domain) => domain.startsWith(domainPart))
        .map((domain) => `${localPart}@${domain}`);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setEmail(suggestion);
    setSuggestions([]);
  };

  const validatePhone = (value: string) => {
    if (!phonePattern.test(value)) {
      setPhoneError("מספר טלפון לא תקין");
    } else {
      setPhoneError("");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    validatePhone(value);
  };

  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps,
    getCardImageProps,
  } = usePaymentInputs();

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServices();
        setServices(data.data);
      } catch (error) {
        setError(new Error("Failed to fetch items"));
      }
    };

    loadServices();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newAppointment: Appointment = {
      service: service?.name || "",
      name,
      date,
      time,
      email,
      phone,
      note,
    };
    // await addAppointment(newAppointment)
    setShowModal(true);
  };

  const handlePaymentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle payment processing here
    alert("Payment details submitted successfully!");
    setShowModal(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Book an Appointment
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Srevice</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={service?.name || ""}
            label="Service"
            onChange={(e: SelectChangeEvent<string>) => {
              console.log(e);

              const selectedService: Service | null =
                services.find((s: Service) => s.name === e.target.value) ||
                null;
              console.log("selected service: " + selectedService);

              setService(selectedService);
              console.log(service);
            }}
          >
            {services.map((service: Service) => (
              <MenuItem key={service.id} value={service.name}>
                {service.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDate(e.target.value)
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTime(e.target.value)
          }
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          fullWidth
          margin="normal"
        />

        <TextField
          label="מייל"
          value={email}
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
          fullWidth
          margin="normal"
        />
        {suggestions.length > 0 && (
          <div>
            {suggestions.map((suggestion, index) => (
              <MenuItem
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </MenuItem>
            ))}
          </div>
        )}
        <TextField
          label="טלפון"
          value={phone}
          onChange={handlePhoneChange}
          error={!!phoneError}
          helperText={phoneError}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Note"
          value={note}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNote(e.target.value)
          }
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
          {/* <PaymentInputsWrapper {...wrapperProps}> */}
          {/* <svg {...getCardImageProps({ images: images })} /> */}
          <Input {...getCardNumberProps()} placeholder="Card Number" />
          <Input {...getExpiryDateProps()} placeholder="Expiry Date" />
          <Input {...getCVCProps()} placeholder="CVC" />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit Payment
          </Button>
          {/* </PaymentInputsWrapper> */}
        </form>
      </Modal>
    </Container>
  );
};

export default BookAppointment;
