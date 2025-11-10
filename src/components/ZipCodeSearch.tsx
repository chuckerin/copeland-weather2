import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

interface Props {
  zipCodeInputRef: React.RefObject<HTMLInputElement>;
  onHandleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ZipCodeSearch(props: Props) {
  const { zipCodeInputRef: zipCodeInput, onHandleSubmit: handleSubmit } = props;

  return (
    <>
      <div className='flex flex-column gap-2 components'>
        <label htmlFor='zipCode' className='label'>
          Zip Code
        </label>
        <InputText
          id='zipCode'
          placeholder='Get the current temperature for your favorite Zip Code'
          ref={zipCodeInput}
        />
        <Button
          id='btnZip'
          onClick={handleSubmit}
          className='btn btn-secondary'
        >
          Search
        </Button>
      </div>
    </>
  );
}

export default ZipCodeSearch;

// the code below goes in the parent.

// import ZipCodeSearch from './components/ZipCodeSearch';

// const zipCodeInput = useRef<HTMLInputElement>(null!);

/* <ZipCodeSearch
            zipCodeInputRef={zipCodeInput}
            onHandleSubmit={handleSubmit}
          /> */
