import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectUserCreateDialogComponent from "../ProjectUserCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectUser create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectUserCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectUser-create-dialog-component")).toBeInTheDocument();
});
