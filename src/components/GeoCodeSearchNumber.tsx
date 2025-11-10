import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

interface Props {
  latInput: number | null;
  handleLatInputChange: (e: any) => void;
  lonInput: number | null;
  handleLonInputChange: (e: any) => void;
  onHandleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function GeoCodeSearchNumber(props: Props) {
  const {
    latInput,
    handleLatInputChange,
    lonInput,
    handleLonInputChange,
    onHandleSubmit: handleSubmit,
  } = props;

  return (
    <>
      <div className='flex flex-column gap-2 components'>
        <label htmlFor='lat' className='label'>
          Latitude
        </label>
        <InputNumber
          id='lat'
          placeholder='34.0736'
          className='card-form-control'
          value={latInput}
          onChange={handleLatInputChange}
          min={-90}
          max={90}
          useGrouping={false}
          minFractionDigits={0}
          maxFractionDigits={6}
        />
        <br></br>
        <label htmlFor='lon' className='label'>
          Longitude
        </label>
        <InputNumber
          id='lon'
          placeholder='-118.4004'
          className='card-form-control'
          value={lonInput}
          onChange={handleLonInputChange}
          min={-180}
          max={180}
          useGrouping={false}
          minFractionDigits={0}
          maxFractionDigits={6}
        />
        <Button
          id='btnGeocode2'
          onClick={handleSubmit}
          className='btn btn-secondary'
        >
          Search
        </Button>
      </div>
    </>
  );
}

export default GeoCodeSearchNumber;

// the code below goes in the parent.  however, i couldn't get it to work

// import GeoCodeSearchNumber from './components/GeoCodeSearchNumber';

// 2 input numbers used for geocode
// const [latInput, setLatInput] = useState<number>(0);
// function handleLatInputChange(event: { target: { value: any } }) {
//   console.log('event', event);
//   const val = event.target.value;
//   console.log('val', val);
//   setLatInput(Number(val));
// }
// const [lonInput, setLonInput] = useState<number>(0);
// function handleLonInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//   console.log('lonInput', lonInput);
//   const val = event.target.value;
//   console.log('val', val);
//   setLonInput(Number(val));
// }

/* <GeoCodeSearchNumber
            latInput={latInput}
            handleLatInputChange={handleLatInputChange}
            lonInput={lonInput}
            handleLonInputChange={handleLonInputChange}
            onHandleSubmit={handleSubmit}
          /> */
