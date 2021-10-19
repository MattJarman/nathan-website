import React from 'react'
import PropTypes from 'prop-types'

import Person from './person'
import External from './external'
import Image from './image'
import Film from './film'
import House from './house'
import Lighting from './lighting'
import Editing from './editing'
import ColourGrading from './colourGrading'
import Camera from './camera'
import Sound from './sound'
import Planning from './planning'

import LinkedIn from './linkedin'
import Facebook from './facebook'
import Instagram from './instagram'
import Youtube from './youtube'
import Envelope from './envelope'

const Icon = props => {
  switch (props.name.toLowerCase()) {
    case 'person':
      return <Person {...props} />
    case 'external':
      return <External {...props} />
    case 'image':
      return <Image {...props} />
    case 'film':
      return <Film {...props} />
    case 'house':
      return <House {...props} />
    case 'linkedin':
      return <LinkedIn {...props} />
    case 'facebook':
      return <Facebook {...props} />
    case 'instagram':
      return <Instagram {...props} />
    case 'youtube':
      return <Youtube {...props} />
    case 'envelope':
    case 'email':
      return <Envelope {...props} />
    case 'lighting':
      return <Lighting {...props} />
    case 'editing':
      return <Editing {...props} />
    case 'colour grading':
      return <ColourGrading {...props} />
    case 'camera':
      return <Camera {...props} />
    case 'sound':
      return <Sound {...props} />
    case 'planning':
      return <Planning {...props} />
    default:
      return <></>
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Icon
