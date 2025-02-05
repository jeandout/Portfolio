import IDE from '../components/IDE';
import MobileView from '../components/MobileView'
import { useMediaQuery } from 'react-responsive';

function Index() {
  const isMobile = useMediaQuery({ maxWidth: 940 });
  return (<>
  {isMobile ? <MobileView/> : <IDE />}
  </>)
}

export default Index;
