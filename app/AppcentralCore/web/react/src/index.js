import { TopNav, Layout, SideNav, FilterContainer, PanelHeader, PanelBody } from './layout';
import { DropDown, inputText, FormRadioGroup, FormTimePicker, BsDropDown, FormDatePicker, FormDateTimePicker, FormInput, FormUploader, FroalaEditor, FormColorPicker, FormSwitch, GoogleMap } from './inputs';
import { SearchByCrn } from './forms';
import CwAccordion from './navigation/courseWizardAccordion';
// import { ClientPaginator } from './navigation/ClientNavigation';
import Paginator from './navigation/paginator';
import Modals from './modals';
import * as CoreFunctions from './lib';
import FroalaConfig from './lib/froalaConfig';

export {
  TopNav,
  Layout,
  SideNav,
  FilterContainer,
  DropDown,
  FormRadioGroup,
  BsDropDown,
  inputText as InputText,
  FormSwitch,
  FormDatePicker,
  FormDateTimePicker,
  FormTimePicker,
  FormInput,
  FormUploader,
  FroalaEditor,
  GoogleMap,
  FormColorPicker,
  SearchByCrn as FormsSearchByCrn,
  CwAccordion,
  // ClientPaginator as CSPaginator,
  Paginator,
  CoreFunctions,
  Modals,
  FroalaConfig,
  PanelHeader,
  PanelBody,
};
