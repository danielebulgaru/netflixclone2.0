import { Container, Row, Col, Button, Image } from "react-bootstrap"

function SettingsPage() {
  return (
    <main className="bg-light min-vh-100 py-5">
      <Container className="settings-container">
        <h1 className="fw-normal">Account</h1>
        <hr />

        <Row className="py-2">
          <Col md={3} className="text-secondary fw-bold small">
            MEMBERSHIP & BILLING

            <Button variant="light" className="rounded-0 border mt-3 d-block">
              Cancel Membership
            </Button>
          </Col>

          <Col md={5}>
            <p className="mb-1">
              <strong>daniele.bulgaru@strive.school</strong>
            </p>
            <p className="text-secondary mb-1">Password: ********</p>
            <p className="text-secondary mb-1">Phone: 321 044 1279</p>

            <hr />

            <p>
              <strong>PayPal</strong> daniele.bulgaru@strive.school
            </p>
          </Col>

          <Col md={4} className="d-flex flex-column text-md-end account-links">
            <a>Change account email</a>
            <a>Change password</a>
            <a>Change phone number</a>

            <hr />

            <a>Update payment info</a>
            <a>Billing details</a>

            <hr />

            <a>Redeem gift card or promo code</a>
            <a>Where to buy gift cards</a>
          </Col>
        </Row>

        <hr />

        <Row className="py-2">
          <Col md={3} className="text-secondary fw-bold small">
            PLAN DETAILS
          </Col>

          <Col md={5}>
            <strong>Premium </strong>
            <span className="border border-dark px-1 small fw-bold">ULTRA HD</span>
          </Col>

          <Col md={4} className="text-md-end account-links">
            <a>Change plan</a>
          </Col>
        </Row>

        <hr />

        <Row className="py-2">
          <Col md={3} className="text-secondary fw-bold small">
            SETTINGS
          </Col>

          <Col md={9} className="d-flex flex-column account-links">
            <a>Parental controls</a>
            <a>Test participation</a>
            <a>Manage download devices</a>
            <a>Activate a device</a>
            <a>Recent device streaming activity</a>
            <a>Sign out of all devices</a>
          </Col>
        </Row>

        <hr />

        <Row className="py-2">
          <Col md={3} className="text-secondary fw-bold small">
            MY PROFILE
          </Col>

          <Col md={5}>
            <div className="d-flex align-items-center gap-2">
              <Image
                src="/Daniele.jpeg"
                width="35"
                height="35"
                className="object-fit-cover"
              />

              <strong>Strive Student</strong>
            </div>

            <div className="d-flex flex-column mt-4 account-links">
              <a>Language</a>
              <a>Playback settings</a>
              <a>Subtitle appearance</a>
            </div>
          </Col>

          <Col md={4} className="d-flex flex-column text-md-end account-links">
            <a>Manage profiles</a>
            <a>Add profile email</a>
            <br />
            <a>Viewing activity</a>
            <a>Ratings</a>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default SettingsPage