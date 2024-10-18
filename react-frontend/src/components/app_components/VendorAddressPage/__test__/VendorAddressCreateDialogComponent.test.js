import React from "react";
import { render, screen } from "@testing-library/react";

import VendorAddressCreateDialogComponent from "../VendorAddressCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders vendorAddress create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <VendorAddressCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("vendorAddress-create-dialog-component")).toBeInTheDocument();
});
