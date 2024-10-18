import React from "react";
import { render, screen } from "@testing-library/react";

import InvoicePaymentEditDialogComponent from "../InvoicePaymentEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders invoicePayment edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <InvoicePaymentEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("invoicePayment-edit-dialog-component")).toBeInTheDocument();
});
