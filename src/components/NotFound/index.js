import {Heading, NotFoundContainer, Para, Image} from './styledComponent'

const NotFound = () => (
  <NotFoundContainer>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Para>We are sorry, the page you requested could not be found.</Para>
  </NotFoundContainer>
)

export default NotFound
