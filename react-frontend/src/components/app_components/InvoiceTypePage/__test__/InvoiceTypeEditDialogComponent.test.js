import React from "react";
import { render, screen } from "@testing-library/react";

import InvoiceTypeEditDialogComponent from "../InvoiceTypeEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders invoiceType edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <InvoiceTypeEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("invoiceType-edit-dialog-component")).toBeInTheDocument();
});
