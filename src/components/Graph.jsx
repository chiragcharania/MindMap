import React from 'react';
import Tree from 'react-d3-tree';

const Graph = ({ data, onClickNode, bgColor }) => {
  return (
    <div id="treeWrapper" style={{ width: '100%', height: '100%' }} className={bgColor} >
      {
        bgColor ?
          (<span className="blackFont">MindMap </span>)
          :
          (<span>Note: For best results, add nodes in the following order: F, C, I, B, D, G, J. </span>)
      }
      <Tree className="nodeFont"
        styles={{
          nodes: {
            node: {
               
              circle: {
                fill: '#ffd303',
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: '2rem'
                  
                }
              }
            },
            leafNode: {
              circle: {
                fill: '#90ee02',
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: '2rem'
                }
              }
            }
          }
        }}
        collapsible={false}
        orientation="vertical"
        translate={{
          x: document.getElementById('treeWrapper')
            ? document.getElementById('treeWrapper').clientWidth / 2
            : window.innerWidth / 2,
          y: document.getElementById('treeWrapper')
            ? document.getElementById('treeWrapper').clientHeight / 4
            : window.innerHeight / 4
        }}
        data={data}
        onClick={onClickNode}
      />
    </div>
  );
};

export default Graph;
