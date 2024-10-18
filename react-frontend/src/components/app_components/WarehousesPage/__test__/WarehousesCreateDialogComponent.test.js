import React from "react";
import { render, screen } from "@testing-library/react";

import WarehousesCreateDialogComponent from "../WarehousesCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders warehouses create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <WarehousesCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("warehouses-create-dialog-component")).toBeInTheDocument();
});
