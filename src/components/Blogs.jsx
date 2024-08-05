import React, { useEffect } from 'react'
import PageHeader from './PageHeader'

const Blogs = () => {

  useEffect(() => {
    document.title = "Learnedge - Blogs";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageHeader title="BLOGS" image={"images/hero/hero1.webp"} />
    </div>
  )
}

export default Blogs
