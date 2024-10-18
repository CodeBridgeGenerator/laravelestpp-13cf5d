import React from "react";
import { render, screen } from "@testing-library/react";

import CustomerTypesPage from "../CustomerTypesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders customerTypes page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CustomerTypesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("customerTypes-datatable")).toBeInTheDocument();
    expect(screen.getByRole("customerTypes-add-button")).toBeInTheDocument();
});
