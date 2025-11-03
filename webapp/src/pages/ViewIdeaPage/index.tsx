import { useParams } from 'react-router-dom';

import type { ViewIdeaRouteParams } from '../../lib/routes';

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParams;
  return (
    <div>
      <h1>{ideaNick}</h1>

      <p>Description of the idea</p>
      <div>
        <p>Text paragraph... </p>
        <p>Text paragraph... </p>
        <p>Text paragraph... </p>
      </div>
    </div>
  );
};
