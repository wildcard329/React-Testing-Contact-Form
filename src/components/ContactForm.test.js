import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import ContactForm from "./ContactForm";

// component rendering
// test("first name in contactform", () => {
//     const { getByText } = render(<ContactForm />);
//     const name = getByText('First Name*')
//     expect(name).toBeInTheDocument()
//   });

// user interactions
test('form queries', () => {
    const { getByLabelText } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/firstname/i)
    const lastNameInput = getByLabelText(/lastname/i)
    const emailInput = getByLabelText(/email/i)
    const messageInput = getByLabelText(/message/i)
    const submitButton = (/submit/i)

    fireEvent.change(firstNameInput, { target: { name: 'firstName', value: 'Joe' }})
    fireEvent.change(lastNameInput, { target: { name: 'lastName', value: 'Baker' }})
    fireEvent.change(emailInput, { target: { name: 'email', value: 'whatever@mail.com' }})
    fireEvent.change(messageInput, { target: { name: 'message', value: 'No!!!'}})

    fireEvent.click(submitButton)

    getByText(/joe/i);
})