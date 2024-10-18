import React from "react";
import { render, screen } from "@testing-library/react";

import PurchaseTypeCreateDialogComponent from "../PurchaseTypeCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders purchaseType create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PurchaseTypeCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("purchaseType-create-dialog-component")).toBeInTheDocument();
});
