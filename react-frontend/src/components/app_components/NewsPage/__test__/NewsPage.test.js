import React from "react";
import { render, screen } from "@testing-library/react";

import NewsPage from "../NewsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders news page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <NewsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("news-datatable")).toBeInTheDocument();
    expect(screen.getByRole("news-add-button")).toBeInTheDocument();
});
