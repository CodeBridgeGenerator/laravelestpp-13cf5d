import React from "react";
import { render, screen } from "@testing-library/react";

import QrMastersEditDialogComponent from "../QrMastersEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders qrMasters edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <QrMastersEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("qrMasters-edit-dialog-component")).toBeInTheDocument();
});
