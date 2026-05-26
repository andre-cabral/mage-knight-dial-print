import Dialtop from '@/app/ui/dialtop/dialtop';

import jsonModels from '@/public/json/mkstats.json';
 
export default function HomePage() {

  return (
    <div className="container">
      <Dialtop modelData={jsonModels?.['Models']?.[0]} />
    </div>
  );
}
