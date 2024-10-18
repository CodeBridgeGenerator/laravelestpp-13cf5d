import React from "react";
import { render, screen } from "@testing-library/react";

import InvoicePaymentCreateDialogComponent from "../InvoicePaymentCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders invoicePayment create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <InvoicePaymentCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("invoicePayment-create-dialog-component")).toBeInTheDocument();
});
