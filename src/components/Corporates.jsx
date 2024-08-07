import React, { useEffect } from 'react'
import PageHeader from './PageHeader'

const Corporates = () => {

  useEffect(() => {
    document.title = "Learnedge - Corporates";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageHeader title="CORPORATES" image={"images/hero/hero2.webp"} />
    </div>
  )
}

export default Corporates
