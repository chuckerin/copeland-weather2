import type { WeatherItem } from '../utils/types';

interface Props {
  requestErrorState: boolean;
  isLoading: boolean;
}

function ErrorMessage(props: Props) {
  const { requestErrorState, isLoading } = props;

  if (!requestErrorState) return;

  return (
    <>
      <div className='error'>No Weather found for search entry</div>
    </>
  );
}

export default ErrorMessage;
