import GetvalueTested from "./GetvalueTested";
import { render, screen } from "@testing-library/react";

test("checking value", () => {
  //Arrange
  render(<GetvalueTested />);
  //Act

  //Assert
  const textValue = screen.getByText("Test value");
  expect(textValue).toBeInTheDocument;
});
