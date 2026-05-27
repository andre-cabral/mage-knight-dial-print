import Dial from '@/app/ui/dial/dial';
import Header from '@/app/ui/header/header';

import jsonModels from '@/public/json/mkstats.json';
 
export default function HomePage() {

  return (
    <>
      <Header
        currentPage='/dial'
      />
      <div className="container">
        <Dial modelData={jsonModels?.['Models']?.[0]} />
      </div>
    </>
    
  );
}
