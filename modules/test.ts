import {
  getFormatter,
  getNow,
  getTimeZone,
  getMessages,
  getLocale,
} from "next-intl/server";

export const test = async () => {
  try {
    const format = await getFormatter();
    const now = await getNow();
    const timeZone = await getTimeZone(); // Retrieve the time zone
    const messages = await getMessages();
    const locale = await getLocale();

    // Do something with the retrieved data
    console.log("Format:", format);
    console.log("Now:", now);
    console.log("Time Zone:", timeZone); // Log the time zone
    console.log("Messages:", messages);
    console.log("Locale:", locale);
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
  }
};

// Call the test function to execute the asynchronous operations
test();