import React from "react";
import { render, screen } from "@testing-library/react";

import PaymentMethodsCreateDialogComponent from "../PaymentMethodsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders paymentMethods create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PaymentMethodsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("paymentMethods-create-dialog-component")).toBeInTheDocument();
});
