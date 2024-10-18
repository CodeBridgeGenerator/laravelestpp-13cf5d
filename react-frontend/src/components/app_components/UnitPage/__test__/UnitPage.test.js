import React from "react";
import { render, screen } from "@testing-library/react";

import UnitPage from "../UnitPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders unit page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UnitPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("unit-datatable")).toBeInTheDocument();
    expect(screen.getByRole("unit-add-button")).toBeInTheDocument();
});
