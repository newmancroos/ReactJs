import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
import Enzyme, { shallow,mount,render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adapter()});

const state = {
  turnData : {
    books : ['The Shining', 'IT', 'David Copperfield', ' A tale of two cities'],
    author : {
      name : 'Charles Dickens',
      imageUrl : 'images/authors/charlesdickens.jpg',
      imageSource : 'wikimedia commons',
      books : ['David Copperfield', ' A tale of two cities']
    },
  },
  highlight: 'none'
}

describe("Author Quiz", () => {
 it("render without crashing", () =>{
   const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected= {()=> {}} />,div);
 })
})
describe("When no answer selected", () => {
  let wrapper;
  beforeAll(()=> {
    wrapper = mount(<AuthorQuiz {...state} onAnswerSelected= {()=> {}} />);
  });
  it("should have no background color", () => {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
  })
})

describe("When the wrong answer has been selected", ()=> {
  let wrapper;
  beforeAll(()=> {
    wrapper = mount(<AuthorQuiz {...(Object.assign({}, state,{highlight : 'wrong'}))} onAnswerSelected= {()=> {}} />)
  });
  it("should have red background color", () => {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
  })
})

describe("When the correct answer has been selected", ()=> {
  let wrapper;
  beforeAll(()=> {
    wrapper = mount(<AuthorQuiz {...(Object.assign({}, state,{highlight : 'correct'}))} onAnswerSelected= {()=> {}} />)
  });
  it("should have green background color", () => {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
  })
})

describe("When the first answer is selected", ()=> {
  let wrapper;
  const handleAnswerSelected = jest.fn();
  beforeAll(()=> {
    wrapper = mount(<AuthorQuiz {...state} onAnswerSelected= {handleAnswerSelected} />)

    wrapper.find(".answer").first().simulate('click');
  });
  it("onHandleSelected should be called", () => {
    expect(handleAnswerSelected).toHaveBeenCalled();
  });

  it("should receive The Shining", () => {
    expect(handleAnswerSelected).toHaveBeenCalledWith("The Shining");
  })
})

/*describe("When setting up testing", () => {
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
*/
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