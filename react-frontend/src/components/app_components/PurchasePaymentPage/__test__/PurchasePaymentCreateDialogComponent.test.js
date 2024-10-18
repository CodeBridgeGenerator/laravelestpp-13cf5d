import React from "react";
import { render, screen } from "@testing-library/react";

import PurchasePaymentCreateDialogComponent from "../PurchasePaymentCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders purchasePayment create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PurchasePaymentCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("purchasePayment-create-dialog-component")).toBeInTheDocument();
});
