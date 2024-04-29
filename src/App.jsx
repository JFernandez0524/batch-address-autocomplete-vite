import { ReactBatchAutocomplete } from '@batchservice/react-batch-autocomplete-lib';
import { useState } from 'react';
import DisplayAddress from './components/DisplayAddress';

function App() {
  const [address, setAddress] = useState('');

  const recentSearch = [
    // List of suggestions to be displayed before any input is provided in search input box.
  ];

  const handleError = (e) => {
    // Handle error as you want
    console.log('Error while searching: ', e);
  };

  const suggestionList = (data) => {
    // Suggestion list data
    console.log('Suggetion List: ', data);
  };

  const onSelect = (data) => {
    // Do Your Execution with data
    console.log('Seleted item: ', data);
    setAddress(data);
  };

  return (
    <div>
      <h1 className='text-3xl font-bold '>APP</h1>
      <ReactBatchAutocomplete
        placeholder='Enter your address'
        notFoundText='Not found data'
        debounce='700'
        apiKey={import.meta.env.VITE_BATCH_SERVER_TOKEN}
        domainServer='https://api.batchdata.com/api/v1/address/autocomplete'
        recentSearch={recentSearch}
        handleError={(e) => handleError(e)}
        suggestionList={(data) => suggestionList(data)}
        onSelect={(data) => onSelect(data)}
        displayData='name'
        showNotFound={true}
        take={5}
        filterType={['address', 'formatted-street', 'zip']}
      />
      <div>{address && <DisplayAddress {...address} />}</div>
    </div>
  );
}

export default App;
