import React from "react";
import { render, screen } from "@testing-library/react";

import InvoicePaymentPage from "../InvoicePaymentPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders invoicePayment page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <InvoicePaymentPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("invoicePayment-datatable")).toBeInTheDocument();
    expect(screen.getByRole("invoicePayment-add-button")).toBeInTheDocument();
});
