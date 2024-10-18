import React from "react";
import { render, screen } from "@testing-library/react";

import InvoiceTemplatePage from "../InvoiceTemplatePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders invoiceTemplate page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <InvoiceTemplatePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("invoiceTemplate-datatable")).toBeInTheDocument();
    expect(screen.getByRole("invoiceTemplate-add-button")).toBeInTheDocument();
});
