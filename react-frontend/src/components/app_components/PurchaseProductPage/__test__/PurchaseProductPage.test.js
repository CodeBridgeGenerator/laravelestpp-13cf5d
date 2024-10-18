import React from "react";
import { render, screen } from "@testing-library/react";

import PurchaseProductPage from "../PurchaseProductPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders purchaseProduct page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PurchaseProductPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("purchaseProduct-datatable")).toBeInTheDocument();
    expect(screen.getByRole("purchaseProduct-add-button")).toBeInTheDocument();
});
