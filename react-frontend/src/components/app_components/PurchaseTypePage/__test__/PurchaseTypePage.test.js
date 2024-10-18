import React from "react";
import { render, screen } from "@testing-library/react";

import PurchaseTypePage from "../PurchaseTypePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders purchaseType page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PurchaseTypePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("purchaseType-datatable")).toBeInTheDocument();
    expect(screen.getByRole("purchaseType-add-button")).toBeInTheDocument();
});
