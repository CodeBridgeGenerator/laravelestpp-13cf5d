import React from "react";
import { render, screen } from "@testing-library/react";

import PaymentMethodsPage from "../PaymentMethodsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders paymentMethods page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PaymentMethodsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("paymentMethods-datatable")).toBeInTheDocument();
    expect(screen.getByRole("paymentMethods-add-button")).toBeInTheDocument();
});
