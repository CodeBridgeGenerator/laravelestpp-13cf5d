import React from "react";
import { render, screen } from "@testing-library/react";

import CustomerTypesEditDialogComponent from "../CustomerTypesEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders customerTypes edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CustomerTypesEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("customerTypes-edit-dialog-component")).toBeInTheDocument();
});
