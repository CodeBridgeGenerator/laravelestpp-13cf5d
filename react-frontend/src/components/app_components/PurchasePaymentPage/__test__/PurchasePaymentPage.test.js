import React from "react";
import { render, screen } from "@testing-library/react";

import PurchasePaymentPage from "../PurchasePaymentPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders purchasePayment page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PurchasePaymentPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("purchasePayment-datatable")).toBeInTheDocument();
    expect(screen.getByRole("purchasePayment-add-button")).toBeInTheDocument();
});
