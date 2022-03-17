import { ReactNode, Suspense } from 'react';
import { Header } from '@/components/Header';
import { Map } from '@/components/Map';

interface Props {
  children: ReactNode;
}

export function LayoutsDefault(props: Props): JSX.Element {
  const { children } = props;

  return (
    <>
      <div className="relative z-app flex flex-col min-h-screen">
        <Map className="fixed z-app-map top-0 left-0 w-full h-screen" />
        <Header className="sticky z-app-header top-0 w-full" />
        <div
          className="relative z-app-space w-full h-[50vw] min-h-[200px] shrink-0 pointer-events-none"
          id="space"
        >
          <div className="flex items-center justify-center w-full h-full">
            <span className="block text-gray-600">Preparing map..</span>
          </div>
        </div>
        <main className="relative z-app-main mt-auto mb-3">
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </main>
      </div>
    </>
  );
}
