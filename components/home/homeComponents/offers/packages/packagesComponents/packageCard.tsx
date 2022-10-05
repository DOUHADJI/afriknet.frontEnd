import { Badge, Button, Card, Col, Row, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'

const PackageCard: FunctionComponent<{
  name: string
  debit: string
  price: number
  isNew: boolean
}> = ({ name, debit, price, isNew }) => {
  return (
    <Card css={{ background : "#75756f" }}>
      <Card.Header>
        <Col>
          {isNew ? <Badge  color={"warning"}>New </Badge> : null}
          <div className='h-2'></div>
          <Text h3 className="text-white font-bold text-sm">
            {name}
          </Text>
        </Col>
      </Card.Header>

      <Card.Body><div className='h-4'></div></Card.Body>

      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#ffffff66',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12} className="text-green-700/75">
              Available
            </Text>
            <Text color="#000" size={12} className="font-semibold text-sm text-white">
              {price} FCFA
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="secondary">
                <Text
                  css={{ color: 'inherit' }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  {debit} Mo/s
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default PackageCard
