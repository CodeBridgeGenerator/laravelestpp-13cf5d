import React from "react";
import { render, screen } from "@testing-library/react";

import QrMastersCreateDialogComponent from "../QrMastersCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders qrMasters create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <QrMastersCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("qrMasters-create-dialog-component")).toBeInTheDocument();
});
