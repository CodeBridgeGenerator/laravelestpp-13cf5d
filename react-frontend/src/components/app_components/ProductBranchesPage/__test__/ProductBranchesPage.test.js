import React from "react";
import { render, screen } from "@testing-library/react";

import ProductBranchesPage from "../ProductBranchesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders productBranches page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProductBranchesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("productBranches-datatable")).toBeInTheDocument();
    expect(screen.getByRole("productBranches-add-button")).toBeInTheDocument();
});
