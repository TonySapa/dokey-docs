import React from 'react'
import { customStyles } from './../../labels/labels.js'

const Alink = (props) => (
  <a style={props.style ? props.style : customStyles.links} href={props.link} target='_blank' rel='noreferrer'>
    {props.text}
  </a>
)

export default Alink