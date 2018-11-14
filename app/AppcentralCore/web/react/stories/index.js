import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Welcome } from '@storybook/react/demo';
import { DropdownItem, NavItem, NavLink, FormGroup, Button } from 'reactstrap';
import {
  TopNav,
  Paginator,
  SideNav,
  DropDown,
  InputText,
  BsDropDown,
  CwAccordion,
  CSPaginator,
  FormDatePicker,
  FormDateTimePicker,
  FormTimePicker,
  FormInput,
  FormUploader,
  FormColorPicker,
  FormRadioGroup,
  FilterContainer,
  FormSwitch,
  GoogleMap,
  Modals,
} from '../src'
import { range, map } from 'lodash'
import './styles/style.scss';
import '../node_modules/@syncfusion/ej2-react-calendars/styles/bootstrap.css'
import '../node_modules/@syncfusion/ej2-react-inputs/styles/bootstrap.css'
import '../node_modules/@syncfusion/ej2-react-inputs/styles/uploader/bootstrap.css'
import formSwitchNotes from '../src/inputs/formSwitch.md';
import formInputNotes from '../src/inputs/formInput.md';
import formDatePickerNotes from '../src/inputs/formDatePicker.md';
import formDateTimePickerNotes from '../src/inputs/formDateTimePicker.md';
import formTimePickerNotes from '../src/inputs/formTimePicker.md';
import formColorPickerNotes from '../src/inputs/formColorPicker.md';
import formUploaderNotes from '../src/inputs/formUploader.md';
import formRadioGroupNotes from '../src/inputs/formRadioGroup.md';
import googleMapsNotes from '../src/inputs/googleMaps.md';
import sideNavNotes from '../src/layout/sideNav.md';
import topNavNotes from '../src/layout/topNav.md';
import filterContainerNotes from '../src/layout/filterContainer.md';
import confirmationModalNotes from '../src/modals/confirmationModal.md';
import cwAccordionNotes from '../src/navigation/courseWizardAccordion.md';
import paginatorNotes from '../src/navigation/paginator.md';

const constants = require('./constants.json');

// const instance = { name: 'Example of name of an instance' }
const layout = storiesOf('Layout', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(withKnobs)
  .addDecorator(withNotes);

const inputs = storiesOf("Inputs", module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(withKnobs)
  .addDecorator(withNotes);

const datetime = storiesOf("Date & Time", module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(withKnobs)
  .addDecorator(withNotes);

// const forms = storiesOf("Forms", module)
//   .addDecorator((story, context) => withInfo('common info')(story)(context))
//   .addDecorator(withKnobs)
//   .addDecorator(withNotes);

const modals = storiesOf("Modals", module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(withKnobs)
  .addDecorator(withNotes);

const navigation = storiesOf("Navigation", module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(withKnobs)
  .addDecorator(withNotes);

layout.add('Filter Container', () => {
  return (
    <div className="buttonscontainer mt-5">
      <div className="right-buttons">
        <FilterContainer>
            <h3>Filters</h3>
            <p>Select from the filters below in order to refine your search and find related content.</p>
            <h3>Pass your form html as children here.</h3>
        </FilterContainer>  
      </div>
    </div>
  );
}, {
  notes: {markdown: filterContainerNotes},
});

layout.add('Sidebar', () => {
  return (
    <BrowserRouter>
      <Switch>
        <div style={{ height: "100vh", position: "absolute" }}>
          <SideNav menuOptions={constants.sidenavOptions}></SideNav>
        </div>
      </Switch>
    </BrowserRouter>
  );
}, {
  notes: {markdown: sideNavNotes},
});

layout.add('Top Nav', () => {
  const logoutFunction = () => { alert() };
  return (<TopNav logoutFunction={() => logoutFunction()} appName="AppCentral Storybook" actions={constants.actions} userName="Dan Snell">
    <DropdownItem>Impersonate</DropdownItem>
  </TopNav>);
}, {
  notes: {markdown: topNavNotes},
});

datetime.add('Date Picker', () => {
  return (
    <div className="col-md-4">
      <FormDatePicker 
        label="Date Picker" 
        placeholder="Select a Date"
        name="Bob"
        input={{ 
          value: new Date(), 
          onChange: () => { console.log('An optional function that executes when a date is selected.') } 
        }} 
        meta={{}} />
    </div>
  )
}, {
  notes: {markdown: formDatePickerNotes},
});

datetime.add('Date-Time Picker', () => {
  return (
    <div className="col-md-4">
      <FormDateTimePicker 
        label="Date time Picker"
        placeholder="Select a Date and Time"
        name="Pete"
        input={{ 
          value: null,
          onChange: () => { console.log('An optional function that executes when a date is selected.') }
        }} 
        meta={{}} />
    </div>
  )
}, {
  notes: {markdown: formDateTimePickerNotes},
});

datetime.add('Time Picker', () => {
  return (
    <div className="col-md-4">
      <FormTimePicker strictMode name="start" 
        name="myTime"
        label="Time Picker"
        input={{ 
          value: new Date(), 
          onChange: () => { console.log('An optional function that executes when a date is selected.') } 
        }} 
        placeholder="Select a time" />
    </div>
  )
}, {
  notes: {markdown: formTimePickerNotes},
});

inputs.add('Color Picker (Limited Selection)', () => {
  return (
    <div className="col-md-4">
      <FormColorPicker
        input={{ 
          value: '#FF6900',
          onChange: () => { console.log('An optional function that executes when a color is selected.') } 
        }}
        colors={['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF']}
      />
    </div>
  )
}, {
  notes: {markdown: formColorPickerNotes},
});

inputs.add('Google Maps', () => {
  return (
    <GoogleMap
      initialPosition={{lng: -80.112369, lat: 26.054142}}
      onMarkerChange={() => { console.log('The function to be called when the marker on the map changes') }}
      containerElement={<div className="map-container" />}
      mapElement={<div className="map-element" />}
      showCoords
    />
  )
}, {
  notes: {markdown: googleMapsNotes},
})


inputs.add('Input', () => {
  return (
    <div className="col-md-4">
      <FormInput placeHolder="Input" label="Input" type="input" meta={{}} />
    </div>
  )
}, {
  notes: {markdown: formInputNotes},
})

inputs.add('Input - Select (Dropdown)', () => {
  return (
    <div className="col-md-4">
      <FormInput
        defaultOption="Default option"
        options={[{ id: 0, value: "zero", text: "Option 0" }, { id: 1, value: "one", text: "Option 1" }]}
        option={{ key: 'id', value: "value", text: "text" }}
        placeHolder="Input"
        label="Input"
        type="select"
        meta={{}} />
    </div>
  )
}, {
  notes: {markdown: formInputNotes},
});

inputs.add('Radio Group', () => {
  return (
    <div className="col-md-4">
      <FormRadioGroup 
          label="Radio Group" 
          input={{ value: 1, name: "Option 1" }} 
          options={[{ id: 1, name: "Option 1" }, { id: 2, name: "Option 2" }, { id: 3, name: "Option 3" }]} 
          meta={{}} />
    </div>
  )
}, {
  notes: {markdown: formRadioGroupNotes},
})

inputs.add('Toggle Switch', () => {
  return (
    <div className="col-md-4">
      <FormSwitch input={{ value: true, name: 'storydemo' }}  className="test" primaryColored={true} onSwitchToggle={() => {  console.log('This will pass the switch any additonal functions that need to be performed on toggle') }} />
    </div>
  )
}, {
  notes: {markdown: formSwitchNotes},
});

inputs.add('Uploader', () => {
  return (
    <div className="col-md-4">
      <FormUploader
        handleUpload={() => { console.log('The function to be called when a file is added via the Open dialog.') }}
        uploadPath=''
        label='Uploader'
        maxFileCount={1} 
        allowedExtensions={['png', 'jpg', 'PNG', 'JPG']} 
        showFileList
        recommended="I recommend you pay your developers more"
        removeFile={() => { console.log('The function to be called when the remove file button is clicked.') }}
      />
    </div>
  )
}, {
  notes: {markdown: formUploaderNotes},
});

// forms.add('Search by crn', () => {
//   return (
//     <div className="col-md-4">
//       <FormsSearchByCrn></FormsSearchByCrn>
//     </div>
//   )
// })

navigation.add('Accordion', () => {
  const data = { "id": 156758, "creditsRange": "3.0", "name": "Cultural Competency in Health Care", "number": "4000", "subjectCode": "BHS", "description": "The purpose of this course is to develop competency and better understanding when confronted with issues related to culture, diversity and ethnically based customs, rituals, alternative health care choices, folk medicine, cultural structure and viewpoints and the practitioner's delivery of health care. Prerequisite: COMP 1500. Frequency: Every Spring, Every Summr I, Every Summer II, Every Fall and Every Winter.\n", "outcomes": "1)\tLearn, understand and be able to identify the barriers, factors and prejudice that hinder cultural understanding, acceptance and delivery of care and create strategies to overcome these barriers\n2)\tLearn, understand and be able to define key terminology \n3)\tCreate an increased awareness of personal cultural biases and ethnic identity and preconceived notions that impact interactions with other diverse populations\n4)\tBecome familiar with various ethnic and cultural culturally diverse populations \n5)\tDemonstrate knowledge and understanding of factors that shape and define different groups of people as a culture\n6)\tLearn, understand and recognize the importance of language as to culture and the delivery of care limitations of utilizing interpreter services and understand the concept of \"cultural brokers\"\n7)\tLearn, understand and demonstrate ability to utilize selected cultural competency models and tools in the delivery of care to different cultures\n", "classes": [{ "credits": "3.0", "crn": "10008", "crns": [], "seqNum": "1", "ptrm": "HBS", "ptrmDesc": "BS Health Sci, RT Completion", "sessionCode": "D", "maxEnroll": 20.00, "enrolled": 8.00, "termCode": "201810", "campusCode": "YW", "college": "Dr. P Patel Coll Hlth Care Sci", "department": "Health Sciences", "division": "Bachelors", "termTitle": "Summer II 2017", "bookUrl": "http://nsubooks.bncollege.com/webapp/wcs/stores/servlet/TBListView?cm_mmc=RI-_-298-_-A-_-1&catalogId=10001&storeId=10055&langId=-1&;termMapping=Y&courseXml=<?xml version=\"1.0\" encoding=\"UTF-8\"?><textbookorder> <courses><course dept=\"BHS\" num=\"4000\" sect=\"1\" term=\"201810\" /> </courses> </textbookorder>", "location": "On-line Course", "status": "A", "startDate": "2017-06-26T00:00:00", "endDate": "2017-09-17T00:00:00", "hasSyllabus": true, "endorsementMet": false, "showSyllabusLink": true, "professor": { "firstName": "Jodie", "lastName": "Berman", "email": "jodie@nova.edu", "nsuId": "pIT8YG94MK9w6R5wk4+kwA==" }, "secondaryInstructors": [], "meetings": [{ "startTime": null, "endTime": null, "days": "", "building": "Online Venue", "room": "BLACKBOARD", "startDate": "6/26/2017 12:00:00 AM", "endDate": "9/17/2017 12:00:00 AM", "meetings": 0.00, "type": "CLAS", "buildingCode": "ONLINE", "crn": null }], "allCrnMeetings": [], "prereq": "", "crossListedGroup": null }] };
  return (
    <CwAccordion subjectCode={data.subjectCode} number={data.number} name={data.name} code={data.code} description={data.description} outcomes={data.outcomes} classes={data.classes} />
  )
}, {
  notes: {markdown: cwAccordionNotes},
});

navigation.add('Paginator', () => {
  var exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });
  return (
    <Paginator 
      items={exampleItems} 
      pagerPages={4}
      initialPage={2}
      initialSize={24}
      pagerValues={[6,12,24,48]}
      onChangePage={() => { console.log('You changed the page') }}
    />
  )
}, {
  notes: {markdown: paginatorNotes},
});

modals.add('Confirmation', () => {
  const { ConfirmationModal } = Modals;
  return (
    <ConfirmationModal 
      buttonColor="info" 
      okColor="primary" 
      buttonLabel="Show modal"
      header="Confirmation"
      ok={() => { console.log('ok') }} 
      cancel={() => { console.log('cancel'); }}
    >
      <div className="text-center">
        <div className="i-circle success"><i className="fa fa-check"></i></div>
        <h4><strong>Are you sure you want to continue?</strong></h4>
        <p>Another warning before proceding?</p>
      </div>
    </ConfirmationModal>
  );
}, {
  notes: {markdown: confirmationModalNotes},
});
