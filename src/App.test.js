import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';


test("time becomes unavailable after reservation is made", () => {
  render(<App />);

  // Click on the "Reservations" link to navigate to the "/booking" path
  fireEvent.click(screen.getByText("Reservations", { selector: ".links" }));

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput, { target: { value: '2023-04-05' } });
  const timeInput = screen.getByLabelText('Choose time');
  fireEvent.change(timeInput, { target: { value: '17:00' } });
  const submitButton = screen.getByText('Make Your reservation');
  fireEvent.click(submitButton);

  const unavailableTime = screen.getByLabelText('Choose time');
  console.log(unavailableTime);
  expect(unavailableTime).toHaveValue('17:00');
});
