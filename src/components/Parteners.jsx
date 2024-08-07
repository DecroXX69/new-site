import React, { useEffect } from 'react'
import PageHeader from './PageHeader'

const Parteners = () => {

  useEffect(() => {
    document.title = "Learnedge - Parteners";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageHeader title="PARTENERS" image={"images/hero/hero2.webp"} />
    </div>
  )
}

export default Parteners
