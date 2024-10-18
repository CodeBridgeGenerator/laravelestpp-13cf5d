import React from "react";
import { render, screen } from "@testing-library/react";

import TransactionPage from "../TransactionPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders transaction page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TransactionPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("transaction-datatable")).toBeInTheDocument();
    expect(screen.getByRole("transaction-add-button")).toBeInTheDocument();
});
