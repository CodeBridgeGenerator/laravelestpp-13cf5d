import React from "react";
import { render, screen } from "@testing-library/react";

import WarehousesPage from "../WarehousesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders warehouses page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <WarehousesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("warehouses-datatable")).toBeInTheDocument();
    expect(screen.getByRole("warehouses-add-button")).toBeInTheDocument();
});
