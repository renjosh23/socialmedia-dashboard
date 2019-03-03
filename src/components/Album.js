import React from 'react';
import { Link } from 'react-router-dom';

const Album = props => {
  console.log(props.album);
  return (
    <div className="item">
      <h2>
        <Link
          to={{
            pathname: `/albums/${props.album.id}`,
            state: { id: props.album.id }
          }}
        >
          {props.album.title}
        </Link>
      </h2>
      <p>{props.album.body}</p>
    </div>
  );
};

export default Album;