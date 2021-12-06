import { screen } from "@testing-library/react";

test("Hello CodeSandbox", () => {
  //Arrange
  const value = screen.getByText("Hello CodeSandbox");

  //Act

  //Assert
  expect(value).toBeInTheDocument();
});
