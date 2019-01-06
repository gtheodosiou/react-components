import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from "faker";
import ApprovalCard from "./ApprovalCard"

const App = () => {
    return (
      <div className="ui container comments">
          <ApprovalCard>
              <CommentDetail
                  author="George"
                  timeAgo="Today at 4:45PM"
                  content="Nice post"
                  avatar={faker.image.avatar()}
              />
          </ApprovalCard>

          <ApprovalCard>
              <CommentDetail
                  author="Panos"
                  timeAgo="Today at 3:00AM"
                  content="Better post"
                  avatar={faker.image.avatar()}
              />
          </ApprovalCard>

          <ApprovalCard>
              <CommentDetail
                  author="Sonia"
                  timeAgo="Yesterday at 7:45AM"
                  content="The best post"
                  avatar={faker.image.avatar()}
              />
          </ApprovalCard>
      </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);