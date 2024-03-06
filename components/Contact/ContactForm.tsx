"use client";
import { Button, TextField } from "@mui/material";
import React from "react";
import HolidayHome from "./Inputs/HolidayHome";
import Adults from "./Inputs/Adults";
import Children from "./Inputs/Children";
import { IoIosSend } from "react-icons/io";

function ContactForm() {
  return (
    <div className="rounded-md px-3 py-8 custom_border shadow-md bg-grey2">
      <form className="w-full">
        <div className="flex w-full items-end mb-4">
          <div className="w-1/2 px-2">
            <TextField
              required
              id="outlined-required"
              className="w-full bg-white"
              InputLabelProps={{
                className: "font-Bold",
              }}
              label="Name"
              size="small"
            />
          </div>
          <div className="w-1/2 px-2">
            <TextField
              required
              id="outlined-required"
              className="w-full bg-white"
              InputLabelProps={{
                className: "font-Bold",
              }}
              label="Email:"
              size="small"
            />
          </div>
        </div>
        <div className="flex w-full items-end mb-4">
          <div className="w-1/2 px-2">
            <TextField
              required
              id="outlined-required"
              className="w-full bg-white"
              InputLabelProps={{
                className: "font-Bold",
              }}
              label="Phone/Mobile"
              size="small"
            />
          </div>
          <div className="w-1/2 px-2">
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
        <div className="flex w-full">
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
            variant="outlined"
          />
        </div>
        <p className="text-xs">
          The content of this form will be sent directly to the e-mail address
          of the owner of accommodation and is used exclusively for sending
          inquiries about booking of listed property.
        </p>
        <Button
          variant="contained"
          className="!bg-yellow w-full tracking-widest text-lg py-3"
        >
          Send Inquiry <IoIosSend className="text-2xl" />
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
