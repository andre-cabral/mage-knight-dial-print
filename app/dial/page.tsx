import Dial from '@/app/ui/dial/dial';

import jsonModels from '@/public/json/mkstats.json';
 
export default function HomePage() {

  return (
    <div className="container">
      <Dial modelData={jsonModels?.['Models']?.[0]} />
    </div>
  );
}
