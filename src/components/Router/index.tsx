import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Routing } from "@constants";
import { Spinner } from "components";

const Layout = lazy(() => import("../../@modules/Layout"));

function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path={Routing.NotFound} element={<div>not found</div>} />
      </Routes>
    </Suspense>
  );
}

export default Router;
