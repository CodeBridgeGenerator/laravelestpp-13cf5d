import React from "react";
import { render, screen } from "@testing-library/react";

import InvoiceProductsEditDialogComponent from "../InvoiceProductsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders invoiceProducts edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <InvoiceProductsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("invoiceProducts-edit-dialog-component")).toBeInTheDocument();
});
