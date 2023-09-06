import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './App.module.scss'
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('blue');
  const [filmColor, setFilmColor] = useState('blue');
  const [handleColor, setHandleColor] = useState('blue');

  const changeColor = (value: any) => {setColor(value)}
  const changeFilmColor = (value: any) => {setFilmColor(value)}
  const changeHandleColor = (value: any) => {setHandleColor(value)}

  console.log('color: ', color)

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <section className={styles.doors}>
              <div className={styles.door} style={{background: color}}>
                <div className={styles.film} style={{background: filmColor}}>
                  <div className={styles.handle} style={{background: handleColor}}>
                  </div>
                </div>
                <span>front view</span>
              </div>
              <div className={styles.door} style={{background: color}}>
                <div className={styles.film} style={{background: filmColor}}>
                  <div className={styles.handle} style={{background: handleColor}}>
                  </div>
                </div>
                <span>back view</span>
              </div>
            </section>
          </Col>
          <Col md="auto">
            <h1>Doors config</h1>
            <Form.Group className="mb-3">
              <Form.Label>Main color</Form.Label>
              <Form.Select value={color} onChange={e => changeColor(e.target.value)}>
                <option>red</option>
                <option>blue</option>
                <option>green</option>
                <option>yellow</option>
              </Form.Select>
              <Form.Label>Film color</Form.Label>
              <Form.Select value={filmColor} onChange={e => changeFilmColor(e.target.value)}>
                <option>red</option>
                <option>blue</option>
                <option>green</option>
                <option>yellow</option>
              </Form.Select>
              <Form.Label>Doorhandle color</Form.Label>
              <Form.Select value={handleColor} onChange={e => changeHandleColor(e.target.value)}>
                <option>red</option>
                <option>blue</option>
                <option>green</option>
                <option>yellow</option>
              </Form.Select>
              <Form.Label>Width</Form.Label>
              <Form.Select>
                <option>regular</option>
                <option>XL</option>
              </Form.Select>
              <Form.Label>Height</Form.Label>
              <Form.Select>
                <option>regular</option>
                <option>XL</option>
              </Form.Select>
              <Form.Label>Door opens</Form.Label>
              <Form.Select>
                <option>right</option>
                <option>left</option>
              </Form.Select>
              <Form.Label>Accessories</Form.Label>
              <Form.Select multiple>
                <option>feat1</option>
                <option>feat2</option>
                <option>feat3</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App



