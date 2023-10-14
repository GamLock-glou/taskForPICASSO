import {FC} from "react";

import {Route, Routes} from "react-router-dom";

import {ROUTE_CONSTANTS} from "../shared/config";

// import {NotFound} from "./not-found/NotFound";
import {PostDetailed} from "./post-detailed";
import {PostsPage} from "./posts";

export const Router: FC = () => (
  <Routes>
    {/* <Route path="*" element={<NotFound />} /> */}
    <Route path={ROUTE_CONSTANTS.POSTS} element={<PostsPage />} />
    <Route path={ROUTE_CONSTANTS.POST} element={<PostDetailed />} />
    {/* <Route path={ROUTE_CONSTANTS.NOT_FOUND} element={<NotFound />} /> */}
  </Routes>
);
