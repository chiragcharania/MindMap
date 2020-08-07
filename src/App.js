import React, { useState } from 'react';
import './App.css';

import Graph from './components/Graph';
import Header from './components/Header';

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;

}

function App() {
  const [current, setCurrent] = useState('');
  const [display, setdisplay] = useState([]);
  const [data, setData] = useState({ root: null });
  const [verify, setVerify] = useState(false);
  const [text, setText] = useState();
  const [mindMapData, setMindMapData] = useState('');
  const array = [];
  //Tree traversal function
  function traverse(obj) {
    if (!obj) return null;

    if (obj.left) {
      traverse(obj.left);
    }

    if (obj.value) {
      let children = [];

      if (obj.left) {
        children = [...children, traverse(obj.left)];
      }

      if (obj.right) {
        children = [...children, traverse(obj.right)];
      }

      return {
        name: String(obj.value),
        children: children.length && [traverse(obj.left)].length ? children : []
      };
    }



    if (obj.right) {
      traverse(obj.right);
    }
  }

  const formatData = data => {
    const res = Object.keys(data).map(key => {
      return {
        name: data[key] && data[key].value ? String(data[key].value) : key,
        children: traverse(data.root) ? [traverse(data.root)] : null
      };
    });

    if (res[0].children) {
      return res[0].children;
    }

    return res;
  };

  //Inserting a node in the tree
  const insert = value => {
    let node = new Node(value);
    // Set this node to the root value
    if (!data.root) setData({ root: node });
    else {
      let current = data.root;
      while (!!current) {
        if (node.value < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else if (node.value > current.value) {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          break;
        }
      }
    }
    setVerify(false)
    return data;
  };

  const createMindMap = (obj) => {
    let mindMap;
    //check whether parent there or not
    //parent is present
    if (obj.parent) { 
      let childNode = [];
      if (obj.children) {
        obj.children.forEach(child => {
          childNode.push({ name: child.name });
        });
      }
      mindMap = {
        name: obj.parent.name,
        children: [{
          name: obj.name,
          children: childNode
        }]
      }

    }
    // if no parent
    else{
      let childNode = [];
      if (obj.children) {
        obj.children.forEach(child => {
          childNode.push({ name: child.name });
        });
      }
      mindMap = {
          name: obj.name,
          children: childNode
      }


    }
    setMindMapData(mindMap);
    console.log("Now, ",mindMapData );
    // mindMapData = mindMap;
    
  }


  return (
    <main className="App">
      <Header
        current={current}
        setCurrent={setCurrent}
        insert={insert}
        data={data}
        array={display}
        text={text}
      />
      <Graph data={formatData(data)} onClickNode={createMindMap} />
      {mindMapData ? (<Graph data={mindMapData} />) : null}
    </main>
  );
}

export default App;
