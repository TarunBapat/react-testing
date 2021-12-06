import GetvalueTested from "./GetvalueTested";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("GetvalueTested", () => {
  test("checking value", () => {
    //Arrange
    render(<GetvalueTested />);
    //Act

    //Assert
    const textValue = screen.getByText("Test value");
    expect(textValue).toBeInTheDocument;
  });

  test("when button is not clicked", () => {
    //Arrange
    render(<GetvalueTested />);
    //Act

    //Assert
    const initialValue = screen.getByText("original text");
    expect(initialValue).toBeInTheDocument;
  });

  test("when button is clicked", () => {
    //Arrange
    render(<GetvalueTested />);
    //Act
    const ButtonByLabel = screen.getByText("original text");
    userEvent.click(ButtonByLabel);
    //Assert
    const initialValue = screen.getByText("click here");
    expect(initialValue).toBeInTheDocument;
  });
});
