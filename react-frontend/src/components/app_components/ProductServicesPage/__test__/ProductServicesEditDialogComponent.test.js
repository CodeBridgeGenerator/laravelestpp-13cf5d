import React from "react";
import { render, screen } from "@testing-library/react";

import ProductServicesEditDialogComponent from "../ProductServicesEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders productServices edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProductServicesEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("productServices-edit-dialog-component")).toBeInTheDocument();
});
