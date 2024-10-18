import React from "react";
import { render, screen } from "@testing-library/react";

import CustomerTypesCreateDialogComponent from "../CustomerTypesCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders customerTypes create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CustomerTypesCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("customerTypes-create-dialog-component")).toBeInTheDocument();
});
