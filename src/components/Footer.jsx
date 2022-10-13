import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0,0,0)' }}>
        &copy; {new Date().getFullYear()} :{' '} Developed with ❤️️ Alicia McNeil
      </div>
    </MDBFooter>
  );
}