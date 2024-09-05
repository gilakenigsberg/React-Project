// import React from "react";
// import { usePaymentInputs, PaymentInputsWrapper } from "react-payment-inputs";
// import { images, CardImages } from "react-payment-inputs/images";
// import styled from "styled-components";

// const Input = styled.input`
//   border: 1px solid #ccc;
//   padding: 10px;
//   margin-bottom: 10px;
//   border-radius: 4px;
//   width: 100%;
// `;

// function PaymentForm() {
//   const {
//     getCardNumberProps,
//     getExpiryDateProps,
//     getCVCProps,
//     wrapperProps,
//     getCardImageProps,
//   } = usePaymentInputs();

//   return (
//     <form>
//       <PaymentInputsWrapper {...wrapperProps}>
//         <svg {...getCardImageProps({ images: images as CardImages })} />
//         <Input {...getCardNumberProps()} placeholder="Card Number" />
//         <Input {...getExpiryDateProps()} placeholder="Expiry Date" />
//         <Input {...getCVCProps()} placeholder="CVC" />
//       </PaymentInputsWrapper>
//     </form>
//   );
// }

// export default PaymentForm;
