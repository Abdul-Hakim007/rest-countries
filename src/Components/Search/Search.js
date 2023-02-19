import React from 'react';
import { Button } from 'react-bootstrap';

const Search = () => {
    return (
        <div>
          <Button style={{margin:'10px'}}>Search</Button>
          <input type="text"/>
        </div>
    );
};

export default Search;