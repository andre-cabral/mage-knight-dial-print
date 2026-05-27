import { Suspense } from 'react';
import Loading from '@/app/ui/general/loading';
import Dial from '@/app/ui/dial/dial';
import Header from '@/app/ui/header/header';
 
export default function DialPage() {
  return (
    <>
      <Header
        currentPage='/dial'
      />
      <div className="container">
        <Suspense fallback={<Loading />}>
          <Dial />
        </Suspense>
      </div>
    </>
  );
}
