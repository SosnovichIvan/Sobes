import { lazy, Suspense } from "react";

const SobesModule = lazy(() => import("sobesedovanie/App"));

export const App = () => {
  return (
    <div>
      App
      <Suspense>
        <SobesModule />
      </Suspense>
    </div>
  );
};
