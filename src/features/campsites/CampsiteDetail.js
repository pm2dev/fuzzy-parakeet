import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CampsiteDetail = ( { campsite } ) => {
    const { image, name, description } = campsite; // Destructure the campsite object

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};




export default CampsiteDetail;