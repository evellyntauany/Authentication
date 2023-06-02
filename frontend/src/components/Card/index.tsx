import { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom'

type PropsCard = {
  icon: IconType
  children?: ReactNode
  className?: string
}

const cardComponent = (props: PropsCard) => {
  return (
    <div className='card'>
      <section>
        {props.children} <props.icon />
      </section>
    </div>
  )
}
export default cardComponent
