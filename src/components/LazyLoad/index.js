import React, { Suspense } from 'react';

// React.lazy - для ленивой загрузки компонентов
// React.Suspense - для заглушек

const LazyComponent = React.lazy(() => import('./OtherComponent'));

export default function App() {
  return (
    <div>
      <h3>LazyComponent</h3>
      <Suspense fallback={<div>loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
