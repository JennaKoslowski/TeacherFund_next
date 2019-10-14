import React from 'react'

function SideNav ({ schools, selectedSchool, onSchoolSelected }) {
  return (
    <div className='flex flex-column w-20 self-center pa2'>
      {
        schools.map((school) => {
          const isCurrentSchoolSelected = school === selectedSchool
          const className = `${isCurrentSchoolSelected
            ? 'blog-side-nav-school-selected'
            : 'blog-side-nav-school-non-selected'} pa2 tc ttc mb1`
          return (
            <a className={className} key={school} onClick={() => onSchoolSelected(school)}>
              {school}
            </a>
          )
        })
      }
    </div>
  )
}

export default SideNav
