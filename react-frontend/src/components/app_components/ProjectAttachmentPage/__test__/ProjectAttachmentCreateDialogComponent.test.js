import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectAttachmentCreateDialogComponent from "../ProjectAttachmentCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectAttachment create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectAttachmentCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectAttachment-create-dialog-component")).toBeInTheDocument();
});