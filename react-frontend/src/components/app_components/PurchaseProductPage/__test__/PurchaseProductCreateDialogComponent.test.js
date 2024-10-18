import React from "react";
import { render, screen } from "@testing-library/react";

import PurchaseProductCreateDialogComponent from "../PurchaseProductCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders purchaseProduct create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PurchaseProductCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("purchaseProduct-create-dialog-component")).toBeInTheDocument();
});
