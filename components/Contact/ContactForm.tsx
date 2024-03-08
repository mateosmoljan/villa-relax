"use client";
import { Button, TextField } from "@mui/material";
import React, { FormEvent, useRef } from "react";
import HolidayHome from "./Inputs/HolidayHome";
import Adults from "./Inputs/Adults";
import Children from "./Inputs/Children";
import { IoIosSend } from "react-icons/io";
import DataRangeComponent from "./Inputs/DateRangeComponent";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_q0fv0h8", "template_bla7yqh", form.current, {
          publicKey: "QslYBLVV8d39BKjwl",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

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
              className="w-full bg-white"
              InputLabelProps={{
                className: "font-Bold text-grey3",
              }}
              name="user_email"
              label="Email:"
              size="small"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full items-end">
          <div className="w-full sm:w-1/2 px-2 mb-4">
            <TextField
              required
              id="outlined-required"
              className="w-full bg-white"
              InputLabelProps={{
                className: "font-Bold text-grey3",
              }}
              name="user_phone"
              label="Phone/Mobile"
              size="small"
            />
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <HolidayHome />
          </div>
        </div>
        <div>
          <DataRangeComponent />
        </div>
        <div className="flex items-end mb-4">
          <div className="w-1/2 px-2">
            <Adults />
          </div>
          <div className="w-1/2 px-2">
            <Children />
          </div>
        </div>
        <div className="flex w-full mb-4 px-2 ">
          <TextField
            required
            InputLabelProps={{
              className: "font-Bold",
            }}
            id="filled-multiline-static"
            label="Inquiry"
            className="bg-white w-full"
            multiline
            rows={4}
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
            className="!bg-yellow w-full tracking-widest text-base font-Bold py-3"
          >
            Send Inquiry <IoIosSend className="text-2xl" />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
