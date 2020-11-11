import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BlobProvider } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const App = () => {

const [show, setShow] = useState(false)

 const handleClick = (e) => {
    e.preventDefault();
	setShow(true)
}



return	show? 
      <BlobProvider document={<MyDocument />}>
        {({ blob, url, loading, error }) => {
          return (
            <a href={url} target="_blank" fontSize="xl">
              Download
            </a>
          )
        }}
      </BlobProvider> :
	  <a href="#" onClick={handleClick}>Click me</a>


}

export default App;
