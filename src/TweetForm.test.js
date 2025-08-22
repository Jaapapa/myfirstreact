import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TweetForm from "./TweetForm";

test("submits name and message and clears inputs", async () => {
  const handleSubmit = jest.fn();
  render(<TweetForm onSubmit={handleSubmit} />);

  const nameInput = screen.getByLabelText(/display name/i);
  const messageInput = screen.getByLabelText(/message/i);

  await act(async () => {
    await userEvent.type(nameInput, "Alice");
    await userEvent.type(messageInput, "Hello there");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));
  });

  expect(handleSubmit).toHaveBeenCalledWith(
    expect.anything(),
    "Alice",
    "Hello there"
  );
  expect(nameInput).toHaveValue("");
  expect(messageInput).toHaveValue("");
});

