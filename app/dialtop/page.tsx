import { Suspense } from 'react';
import Loading from '@/app/ui/general/loading';
import Dialtop from '@/app/ui/dialtop/dialtop';
import Header from '@/app/ui/header/header';
 
export default function DialtopPage() {

  return (
    <>
      <Header
        currentPage='/dialtop'
      />
      <div className="container">
        <Suspense fallback={<Loading />}>
          <Dialtop />
        </Suspense>
      </div>
    </>
  );
}
