import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
//import Enzyme, { shallow } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';

describe("When setting up testing", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("should fail", () => {
    expect(1 + 1).toBe(2);
  });
});

function Hello(props) {
  return <h1>Hello at {props.now}</h1>
}

const moment = new Date(1588946400000);

describe("When setting up testing", () => {
  let result;
  beforeAll(() => {
    result = Hello({ now: moment.toISOString() });
  });

  it("return a value", () => {
    expect(result).not.toBeNull();
  });

  it("is a h1", () => {
    expect(result.type).toBe("h1")
  });

  it("is a h1", () => {
    expect(result.props.children).toBeTruthy();
  });
});

/*
Enzyme.configure({ adapter: new Adapter() });

describe("When testing with Enzyme", () => {
  it("Render h1 element", () => {
    const wrapper = shallow(<Hello now={moment.toISOString()} />);
    expect(wrapper.find("h1").length).toBe(1)
  })
  it("Containt string Hellow---", () => {
    const wrapper = shallow(<Hello now={moment.toISOString()} />);
    expect(wrapper.contains(<h1>Hello at 2010-05-1212121212</h1>).toBe(true)
  })
})
*/