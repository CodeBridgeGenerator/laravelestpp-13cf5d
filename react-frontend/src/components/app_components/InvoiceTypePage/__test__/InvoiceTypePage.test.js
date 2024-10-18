import React from "react";
import { render, screen } from "@testing-library/react";

import InvoiceTypePage from "../InvoiceTypePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders invoiceType page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <InvoiceTypePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("invoiceType-datatable")).toBeInTheDocument();
    expect(screen.getByRole("invoiceType-add-button")).toBeInTheDocument();
});
