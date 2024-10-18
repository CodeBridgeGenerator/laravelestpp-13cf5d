import React from "react";
import { render, screen } from "@testing-library/react";

import InvoiceTemplateEditDialogComponent from "../InvoiceTemplateEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders invoiceTemplate edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <InvoiceTemplateEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("invoiceTemplate-edit-dialog-component")).toBeInTheDocument();
});
