import { Suspense } from 'react';
import Loading from '@/app/ui/general/loading';
import Dial from '@/app/ui/dial/dial';
import Dialtop from '@/app/ui/dialtop/dialtop';
import Header from '@/app/ui/header/header';
 
export default function HomePage() {

  return (
    <>
      <Header
        currentPage='/'
      />
      <div className="container">
        <Suspense fallback={<Loading />}>
          <Dial />
          <Dialtop />
        </Suspense>
      </div>
    </>
  );
}
