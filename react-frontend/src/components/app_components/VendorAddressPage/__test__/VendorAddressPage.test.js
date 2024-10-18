import React from "react";
import { render, screen } from "@testing-library/react";

import VendorAddressPage from "../VendorAddressPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders vendorAddress page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <VendorAddressPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("vendorAddress-datatable")).toBeInTheDocument();
    expect(screen.getByRole("vendorAddress-add-button")).toBeInTheDocument();
});
