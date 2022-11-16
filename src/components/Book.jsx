import React from 'react';

export default function Book({ id, title, author }) {
  return (
    <div>
      {id} {title} {author}
    </div>
  );
}
