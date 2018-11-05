import React, { Suspense } from 'react';

// React.lazy - для ленивой загрузки компонентов
// React.Suspense - для заглушек
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
// можно сделать lazy-load по страницам в роутере

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
