import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

test("contact form creates a new contact", () => {
  const { getByLabelText, getByText, findAllByText } = render(<ContactForm />);

  //query for all inputs
  const firstNameInput = getByLabelText("First Name");

  // const lastNameInput = screen.getByLabelText(/lastName/i);
  // const companyInput = screen.getByLabelText(/companyName/i);
  // const emailInput = screen.getByLabelText(/email/i);
  // const messageInput = screen.getByLabelText(/message/i);

  //function to fill in the inputs
  // fireEvent.change(firstNameInput, {
  //   target: { name: "firstName", value: "Emily" },
  // });
  // fireEvent.change(lastNameInput, {
  //   target: { name: "lastName", value: "Adams" },
  // });
  // fireEvent.change(companyInput, {
  //   target: { name: "companyName", value: "Microsoft" },
  // });
  // fireEvent.change(emailInput, {
  //   target: { name: "email", value: "email@email.com" },
  // });
  // fireEvent.change(messageInput, {
  //   target: { name: "message", value: "Hi" },
  // });

  //Click submit
  // const submitButton = screen.getByType(/submit/i); //is getByType a thing?
  // fireEvent.click(submitButton);

  //Results
  //   const newFirstName = screen.getByText(/emily/i)
  //   expect(newFirstName).toBeInTheDocument();
});
