import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectClientEditDialogComponent from "../ProjectClientEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectClient edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectClientEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectClient-edit-dialog-component")).toBeInTheDocument();
});
