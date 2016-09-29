import { renderComponent, expect } from '../test_helper';
import App from '../../src/containers/app';

// In react, I use 'describe' for each Component
describe('App', () => {
  let component;

  // creates an instance of App before each 'it'
  beforeEach(() => {
    component = renderComponent(App);
  });

  // 'it' tests a single attribute
  it('renders to page', () => {

    // 'expect' makes an 'assertion' about a target
    expect(component).to.exist;

  });

  it('has an h1', () => {
    expect(component.find('h1'))
  });

  it('displays the correct title from reducer', () => {
    expect(component).to.contain('Hello Weather!');
  });

  it('h1 the correct class', () => {
    expect(component.find('h1')).to.have.class('app-title')
  });

  it('has a form', () => {
    expect(component.find('form'))
  });

  // it('has a table', () => {
  //   expect(component.find('table'))
  // });






});
