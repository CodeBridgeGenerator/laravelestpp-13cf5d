import React from "react";
import { render, screen } from "@testing-library/react";

import InvoiceTemplateCreateDialogComponent from "../InvoiceTemplateCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders invoiceTemplate create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <InvoiceTemplateCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("invoiceTemplate-create-dialog-component")).toBeInTheDocument();
});
