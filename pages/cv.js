import CvStory from '../components/site/CvStory';
import cvData from '../public/CV.json';

export default function CV() {
  return <CvStory cvData={cvData} />;
}
