import bullseye from '../assets/bullseye.png'
import thumbsup from '../assets/thumbsup.png'
import meh from '../assets/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react'

interface Props {
    rating: number
}

const Emoji = ({rating}: Props) => {

if (rating < 3) return;


const emojiMap: {[key: number]: ImageProps} = {

    3: {src: meh, alt: 'meh', boxSize: '25px'},
    4: {src: thumbsup, alt: 'recommended', boxSize: '20px'},
    5: {src: bullseye, alt: 'exceptional', boxSize: '25px'},
}

  return (
    < Image  {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji