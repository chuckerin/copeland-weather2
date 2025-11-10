import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

interface Props {
  zipCodeInput: number | null;
  handleZipCodeInput3ChangeState: (e: any) => void;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ZipCodeSearchNumber(props: Props) {
  const {
    zipCodeInput,
    handleZipCodeInput3ChangeState: handleZipCodeInput3Change,
    handleSubmit,
  } = props;

  return (
    <>
      <div className='flex flex-column gap-2 components'>
        <label htmlFor='zipCode3' className='label'>
          Zip Code
        </label>
        <InputNumber
          id='zipCode3'
          placeholder='90210'
          value={zipCodeInput}
          onChange={handleZipCodeInput3Change}
          size={5}
          useGrouping={false}
        />
        <Button
          id='btnZip3'
          onClick={handleSubmit}
          className='btn btn-secondary'
        >
          Search
        </Button>
      </div>
    </>
  );
}

export default ZipCodeSearchNumber;
