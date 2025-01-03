'use client'

import Header from '@/app/components/Header'
import Heading from '@/app/utils/Heading'
import React, { FC, useState } from 'react'

interface Props { }

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div>
      <Heading
        title="Elearning"
        description="Elearning is a platform for students to learn and get help from teachers"
        keywords="Programming,MERN,Redux,Machine learning"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
      />
    </div>
  )
}

export default Page