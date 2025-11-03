import { useParams } from 'react-router-dom';

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as { ideaNick: string };
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
