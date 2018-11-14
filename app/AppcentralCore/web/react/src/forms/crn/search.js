import React from 'react';
import { InputText, BsDropDown } from '../../index';

const source = [{ code: '201730', title: 'Winter 2017' }, { code: '201740', title: 'Spring 2017' }, { code: '201750', title: 'Summer I 2017' }, { code: '201800', title: '2017-18 ContinuingEd/Prof Dev' }, { code: '201810', title: 'Summer II 2017' }, { code: '201820', title: 'Fall 2017' }, { code: '201830', title: 'Winter 2018' }, { code: '201840', title: 'Spring 2018' }, { code: '201850', title: 'Summer I 2018' }];
const fields = { text: 'code', value: 'title' };

const SearchByCrn = () => (
  <div>
    <div className="form-group" show-errors="">
      <BsDropDown data={source} fields={fields}></BsDropDown>
    </div>
    <div className="form-group" show-errors="">
      <InputText name="crnName" label="CRN" error="" placeholder="Enter CRN"></InputText>
    </div>
    <div className="form-group" show-errors="">
      <input className="btn btn-default btn-rad btn-width" value="Clear" type="button" />
      <input className="btn btn-primary btn-rad btn-width" value="Search" type="button" />
    </div>
  </div>
);

export default SearchByCrn;
