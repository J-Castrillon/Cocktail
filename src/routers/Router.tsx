import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layouts/Layout";

const HomePage = lazy(() => import('../views/Index'));
const FavoritesPage = lazy(() => import('../views/Favorites'));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback="Loading...">
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/favorites"
            element={
              <Suspense fallback="Loading...">
                <FavoritesPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
