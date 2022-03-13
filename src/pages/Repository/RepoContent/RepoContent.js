import React from 'react';

const RepoContent = (repo) => {
   return (
      <div key={repo.id}>
         <h1>{repo.name}</h1>
         <p>{repo.description}</p>
      </div>
   );
};

export default RepoContent;
