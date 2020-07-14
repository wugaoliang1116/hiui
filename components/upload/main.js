import React, { Component } from 'react'
import NormalUpload from './NormalUpload'
import DragUpload from './DragUpload'
import UploadPhoto from './UploadPhoto'
import UploadAvatar from './UploadAvatar'
import UploadPictureCard from './UploadPictureCard'
import './style/index'

export default class Upload extends Component {
  constructor () {
    super()
    this.uploadRef = React.createRef()
  }
  render () {
    const { type } = this.props
    if (type === 'drag') {
      return <DragUpload {...this.props} />
    } else if (type === 'photo') {
      return <UploadPhoto {...this.props} ref={this.uploadRef} />
    } else if (type === 'avatar') {
      return <UploadAvatar {...this.props} ref={this.uploadRef} />
    } else if (type === 'pictureCard') {
      return <UploadPictureCard {...this.props} ref={this.uploadRef} />
    } else {
      return <NormalUpload {...this.props} />
    }
  }
}
