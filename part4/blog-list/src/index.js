import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const blog = [
  {
    id:1,
    title:'In Software, When an Engineer Exits the Team',
    author:'Doug Arcuri',
    link: 'https://medium.com/@solidi/in-software-when-an-engineer-exits-the-team-1e550303cff8',
    likes: 4
  },
  {
    id:2,
    title:'Interview Well for Your Next Incredible Engineering Role',
    author:'Doug Arcuri',
    link: 'https://levelup.gitconnected.com/interview-well-for-your-next-incredible-engineering-role-a5513e6596ae',
    likes: 10
  },
  {
    id:3,
    title:'Do Americans Know What a Massive Ripoff American Life Really Is?',
    author:'umair haque',
    link: 'https://eand.co/do-americans-know-what-a-massive-ripoff-american-life-really-is-8804aa6b65fa',
    likes: 8
  },
  {
    id:4,
    title:'3 Things Go Needs Right Now More Than Generics',
    author:'Ryan Collingham',
    link: 'https://betterprogramming.pub/three-things-go-needs-right-now-more-than-generics-a6225d62f76b',
    likes: 15
  },
  {
    id:5,
    title:'You Dont Need Bitcoin to Become Rich; There Are Other Ways',
    author:'Selçuk Sevindik',
    link: 'https://selcuksevindik.medium.com/you-dont-need-bitcoin-to-become-rich-there-are-other-ways-ecfdf6b88463',
    likes: 10
  }
]

ReactDOM.render(
    <App blog={blog}/>,
  document.getElementById('root')
);
