import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  const { getByText } = render(<App />);
});

// test("renders App without crashing", () => {
//   const { getByText } = render(<App />);
//   const name = getByText('First Name')
//   expect(name).toBeInTheDocument()
// });