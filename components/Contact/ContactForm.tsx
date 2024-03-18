"use client";
import { Alert, Button, InputLabel, TextField } from "@mui/material";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import HolidayHome from "./Inputs/HolidayHome";
import Adults from "./Inputs/Adults";
import Children from "./Inputs/Children";
import { IoIosSend } from "react-icons/io";
import DataRangeComponent from "./Inputs/DateRangeComponent";
import emailjs from "@emailjs/browser";
import { MuiTelInput } from "mui-tel-input";
import ".//style.css";

function ContactForm() {
  const form = useRef(null);
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState<boolean>(true);
  const [isPhoneFocused, setIsPhoneFocused] = useState<boolean>(false);
  const [value, setValue] = React.useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessageSent(true);

    setTimeout(() => {
      setMessageSent(false);
    }, 10000);
    if (form.current) {
      emailjs
        .sendForm("service_q0fv0h8", "template_bla7yqh", form.current, {
          publicKey: "QslYBLVV8d39BKjwl",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setEmail("");
            setValue("");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  // Email validation
  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };

  // const handleEmail = () => {
  //   const isValidEmail = validateEmail(email);
  //   setIsValidEmail(isValidEmail);
  // };

  // const validateEmail = (email: string) => {
  //   const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  //   return emailRegex.test(email);
  // };

  // Phone validation
  // const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPhone(e.target.value);
  // };

  // const validatePhone = (phone: string) => {
  //   const phoneRegex = /^\d{10}$/;
  //   return phoneRegex.test(phone);
  // };

  // const handlePhone = () => {
  //   const isValidPhone = validatePhone(phone);
  //   setIsValidPhone(isValidPhone);
  //   setIsPhoneFocused(true);
  // };

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  // Adjust country flag
  // useEffect(() => {
  //   async function fetchCountryFromIP() {
  //     try {
  //       const response = await fetch("https://ipinfo.io/json");
  //       const data = await response.json();
  //       const countryCode = mapCountryCode(data.country);
  //       setDefaultCountry(countryCode);
  //     } catch (error) {
  //       console.error("Error fetching geolocation data:", error);
  //     }
  //   }

  //   fetchCountryFromIP();
  // }, []);

  return (
    <div className="rounded-md px-6 py-8 custom_border shadow-md bg-gray-100">
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <div className="flex flex-col sm:flex-row w-full items-end">
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <TextField
              required
              id="outlined-required"
              name="from_name"
              className="w-full bg-white"
              InputLabelProps={{
                className: "font-Bold text-grey3",
              }}
              label="Name"
              size="small"
            />
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <TextField
              required
              id="outlined-required"
              className="w-full bg-white rounded-md"
              InputLabelProps={{
                className: "font-Bold text-grey3",
              }}
              name="user_email"
              type="email"
              label="Email:"
              size="small"
              style={{
                border: isValidEmail ? "" : "1px solid red",
              }}
            />
            {!isValidEmail && (
              <p style={{ color: "red" }}>Please enter a valid email address</p>
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full items-end">
          <div className="w-full sm:w-1/2 px-2 mb-4 phone_input">
            <InputLabel id="outlined-required" className="font-Bold">
              Phone
            </InputLabel>
            <MuiTelInput
              id="outlined-required"
              value={value}
              required
              onChange={handleChange}
              className="w-full bg-white rounded-md h-[40px]"
              // defaultCountry={defaultCountry}
            />
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <HolidayHome />
          </div>
        </div>

        <div className="flex items-end mb-4">
          <div className="w-1/2 px-2">
            <Adults />
          </div>
          <div className="w-1/2 px-2">
            <Children />
          </div>
        </div>
        <div>
          <DataRangeComponent />
        </div>
        <div className="flex w-full mb-4 px-2 ">
          <TextField
            InputLabelProps={{
              className: "font-Bold",
            }}
            id="filled-multiline-static"
            label="Inquiry"
            className="bg-white w-full"
            multiline
            rows={5}
            name="message"
            variant="outlined"
          />
        </div>
        <p className="text-xs mb-4 text-grey3">
          The content of this form will be sent directly to the e-mail address
          of the owner of accommodation and is used exclusively for sending
          inquiries about booking of listed property.
        </p>
        <div className="px-4">
          <Button
            type="submit"
            variant="contained"
            className={`${
              messageSent
                ? "bg-[#EDF7ED] hover:bg-[#EDF7ED]"
                : "!bg-yellow hover:bg-yellow"
            } w-full tracking-widest text-base font-Bold py-3`}
          >
            {messageSent ? (
              <Alert severity="success" className="">
                Successfully sent
              </Alert>
            ) : (
              <>
                Send Inquiry <IoIosSend className="text-2xl" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
