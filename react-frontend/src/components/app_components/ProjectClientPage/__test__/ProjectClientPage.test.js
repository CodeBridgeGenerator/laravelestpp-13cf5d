import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectClientPage from "../ProjectClientPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectClient page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectClientPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectClient-datatable")).toBeInTheDocument();
    expect(screen.getByRole("projectClient-add-button")).toBeInTheDocument();
});
