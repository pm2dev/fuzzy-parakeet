import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    {/* Column 1 - site navigation */}
                    <Col xs={{ size: 4, offset: 1}} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>  
                            </li>
                            <li>
                                <Link to='/directory'>Directory</Link>  
                            </li>
                            <li>
                                <Link to='/about'>About</Link>  
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>  
                            </li>
                        </ul>
                    </Col>

                    {/* // column 2 - social media links and icons */}
                    <Col xs='6' sm='3' className='text-center'>
                        <h5>Social</h5>
                        <a className='btn btn-social-icon btn-instagram' href='http://instagram.com/'>
                            <i className='fa fa-instagram' />
                        </a>{' '} 
                        {/* the {' '} is a space in JavaScript */}
                        
                        <a className='btn btn-social-icon btn-facebook' href='http://facebook.com/'>
                            <i className='fa fa-facebook' />
                        </a>{' '}   
                        
                        <a className='btn btn-social-icon btn-twitter' href='http://twitter.com/'>
                            <i className='fa fa-twitter' />    
                        </a>{' '}
                        
                        <a className='btn btn-social-icon btn-google' href='http://youtube.com/'>
                            <i className='fa fa-youtube' />    
                        </a>{' '}
                    </Col>

                    {/* // column 3 - contact info */}
                    <Col sm='4' className='text-center'>
                        <a 
                        role='button'
                        className='btn btn-link'
                        href='tel:12065551234'
                        >
                            <i className='fa fa-phone' /> 1-206-555-1234
                        </a>
                        <br />
                        <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> campsites@nucamp.co
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;