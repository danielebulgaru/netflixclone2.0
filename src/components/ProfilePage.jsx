import { Button, Form, Image } from "react-bootstrap"
import { FaPencilAlt } from "react-icons/fa"

function ProfilePage({ setPage }) {
  return (
    <main className="bg-netflix min-vh-100 text-white p-4">
      <div onClick={() => setPage("home")} className="cursor-pointer">
        <img src="/logo.png"  alt="logo" height="40" />
      </div>

      <section className="profile-box mx-auto mt-5">
        <h1 className="display-3 border-bottom border-secondary pb-2">
          Edit Profile
        </h1>

        <div className="d-flex gap-4 pt-4 profile-content">
          <div className="position-relative">
            <Image
              src="/Daniele.jpeg"
              width="130"
              height="130"
              className="object-fit-cover"
            />

            <span className="edit-pencil">
              <FaPencilAlt />
            </span>
          </div>

          <div className="flex-grow-1 text-secondary">
            <div className="bg-secondary text-white fs-5 p-2 mb-4">
              Daniele Bulgaru
            </div>

            <Form.Label>Language:</Form.Label>

            <Form.Select className="bg-black text-white rounded-0 w-auto mb-4">
              <option>English</option>
              <option>Italiano</option>
            </Form.Select>

            <hr />

            <h5 className="text-white">Maturity Settings:</h5>

            <Button variant="secondary" size="sm" className="rounded-0 fw-bold my-2">
              ALL MATURITY RATINGS
            </Button>

            <p className="small">
              Show titles of <strong>all maturity ratings</strong> for this profile
            </p>

            <Button variant="outline-secondary" size="sm" className="rounded-0 px-4">
              EDIT
            </Button>

            <hr />

            <h5 className="text-white">Autoplay controls</h5>

            <Form.Check
              type="checkbox"
              defaultChecked
              label="Autoplay next episode in a series on all devices."
              className="mb-2"
            />

            <Form.Check
              type="checkbox"
              defaultChecked
              label="Autoplay previews while browsing on all devices."
            />
          </div>
        </div>

        <hr />

        <div className="d-flex gap-3 profile-buttons">
          <Button variant="light" className="rounded-0 px-4 fw-bold" onClick={() => setPage("home")}>
            SAVE
          </Button>

          <Button variant="outline-secondary" className="rounded-0 px-4 fw-bold" onClick={() => setPage("home")}>
            CANCEL
          </Button>

          <Button variant="outline-secondary" className="rounded-0 px-4 fw-bold">
            DELETE PROFILE
          </Button>
        </div>
      </section>
    </main>
  )
}

export default ProfilePage