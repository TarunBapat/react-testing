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
    const ButtonByLabel = screen.getByText("click here");
    userEvent.click(ButtonByLabel);
    //Assert
    const initialValue = screen.getByText("updated text");
    expect(initialValue).toBeInTheDocument;
  });

  test("after clicking button original text should hide", () => {
    //Arrange
    render(<GetvalueTested />);
    //Act
    const button = screen.getByText("click here");
    userEvent.click(button);
    //Assert
    const initialValue = screen.getByText("original text");
    expect(initialValue).not.toBeInTheDocument;
  });
});
