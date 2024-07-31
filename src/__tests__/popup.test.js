import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import Popup from "../components/popup";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

const mockStore = configureStore([]);

describe("Popup Component", () => {
  let store;
  const mockSetShowPopup = jest.fn();
  const mockHandleConfirm = jest.fn();

  beforeEach(() => {
    store = mockStore({
      darkMode: { isDarkMode: false },
    });
  });

  test("should render the popup with description", () => {
    console.log("store", Popup);
    render(
      <Popup
        showPopup={true}
        setShowPopup={mockSetShowPopup}
        description="I confirm I am not in the decision making process in order for you to be eligible."
        handleConfirm={mockHandleConfirm}
      />
    );

    expect(
      screen.getByText(
        /I confirm I am not in the decision making process in order for you to be eligible./i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Confirm/i })
    ).toBeInTheDocument();
  });

  test("should not render the popup when showPopup is false", () => {
    render(
      <Popup
        showPopup={false}
        setShowPopup={mockSetShowPopup}
        description="I confirm I am not in the decision making process in order for you to be eligible."
        handleConfirm={mockHandleConfirm}
      />
    );

    expect(
      screen.queryByText(
        /I confirm I am not in the decision making process in order for you to be eligible./i
      )
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /Confirm/i })
    ).not.toBeInTheDocument();
  });

  test("should call handleConfirm when Confirm button is clicked", () => {
    render(
      <Popup
        showPopup={true}
        setShowPopup={mockSetShowPopup}
        description="I confirm I am not in the decision making process in order for you to be eligible."
        handleConfirm={mockHandleConfirm}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /Confirm/i }));
    expect(mockHandleConfirm).toHaveBeenCalled();
  });
});
