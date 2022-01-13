import React, { ReactElement, FC } from 'react'

interface Props {
  title: String
}

const Header: FC<Props> = ({ title }): ReactElement => {
  return <h1>{title}</h1>
}

export default Header
