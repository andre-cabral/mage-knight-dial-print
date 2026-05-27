import Dialtop from '@/app/ui/dialtop/dialtop';
import Header from '@/app/ui/header/header';

import jsonModels from '@/public/json/mkstats.json';
 
export default function HomePage() {

  return (
    <>
      <Header
        currentPage='/dialtop'
      />
      <div className="container">
        <Dialtop modelData={jsonModels?.['Models']?.[0]} />
      </div>
    </>
  );
}
