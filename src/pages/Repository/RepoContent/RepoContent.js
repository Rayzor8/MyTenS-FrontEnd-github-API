import React from 'react';

const RepoContent = (repo) => {
   return (
      <figure
         key={repo.id}
         className="flex border-2 border-gray-900 flex-col justify-between rounded-md"
      >
         <div className="h-8 w-full bg-gray-900 text-white"></div>
         <figcaption className="p-4 flex flex-col gap-2">
            <h1 className='text-sm md:text-lg lg:text-xl text-ellipsis font-bold'>{repo.name}</h1>
            <p className='text-xs md:text-sm'>{repo.description}</p>
         </figcaption>
      </figure>
   );
};

export default RepoContent;
