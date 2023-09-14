import React from 'react';
import Link from 'next/link';

const ButtonLink = ({ id }) => {
  return <Link className='border-yellow-500 border bg-yellow-500/5 text-sm hover:bg-yellow-500 max-w-[120px] py-2 px-3 rounded text-white' href={`/show/${id}`}>View Show</Link>;
};

export default ButtonLink;