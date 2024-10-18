import React from "react";
import { render, screen } from "@testing-library/react";

import PurchasePaymentEditDialogComponent from "../PurchasePaymentEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders purchasePayment edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PurchasePaymentEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("purchasePayment-edit-dialog-component")).toBeInTheDocument();
});
