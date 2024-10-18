import React from "react";
import { render, screen } from "@testing-library/react";

import ProductBranchesCreateDialogComponent from "../ProductBranchesCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders productBranches create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProductBranchesCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("productBranches-create-dialog-component")).toBeInTheDocument();
});
