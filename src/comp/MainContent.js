import React from 'react';

// import name and designer form home;js
const MainContent = ({name, designer}) => {
  return (
    <>
      {/* in name  */}
      <main>
        {name}
        <br />
        {designer}
      </main>
    </>
  );
}

export default MainContent;
