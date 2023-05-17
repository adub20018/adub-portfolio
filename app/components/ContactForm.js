// components/ContactForm.js
"use client";
import styles from "../page.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  function onSubmit(data) {
    axios
      .post("https://eolmp2nftybq9ci.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(`Thanks for your message!`);
      })
      .catch((e) => console.error(e));
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input
        className={styles.inputName}
        {...register("name")}
        id="name"
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        className={styles.inputEmail}
        {...register("email")}
        id="email"
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        className={styles.inputMessage}
        {...register("message")}
        id="message"
        required
      />

      {/* <input {...register("email")} defaultValue="me@gmail.com"></input> */}

      <button className={styles.formSubmit} role="submit">
        {isSubmitting ? "Submitting" : "Submit"}
      </button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}
