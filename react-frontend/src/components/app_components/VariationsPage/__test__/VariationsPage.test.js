import React from "react";
import { render, screen } from "@testing-library/react";

import VariationsPage from "../VariationsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders variations page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <VariationsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("variations-datatable")).toBeInTheDocument();
    expect(screen.getByRole("variations-add-button")).toBeInTheDocument();
});
