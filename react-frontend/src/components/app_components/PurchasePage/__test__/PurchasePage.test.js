import React from "react";
import { render, screen } from "@testing-library/react";

import PurchasePage from "../PurchasePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders purchase page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PurchasePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("purchase-datatable")).toBeInTheDocument();
    expect(screen.getByRole("purchase-add-button")).toBeInTheDocument();
});
