import React from "react";
import { render, screen } from "@testing-library/react";

import QrMastersPage from "../QrMastersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders qrMasters page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <QrMastersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("qrMasters-datatable")).toBeInTheDocument();
    expect(screen.getByRole("qrMasters-add-button")).toBeInTheDocument();
});
