import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "components";
import { Routing } from "@constants";
import { Navigation } from "../";

const Home = lazy(() => import("../../pages/Home"));

function Index() {
    return (
        <Navigation>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path={`${Routing.Home}/*`} element={<Home />} />
                </Routes>
            </Suspense>
        </Navigation>
    );
}

export default Index;