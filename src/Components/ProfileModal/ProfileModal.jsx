import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpend }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpend(false)}
    >
      <form className="infoForm">
        <h3> Your Info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="LastName"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="WorkAt"
            placeholder="Work at"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="LivesIn"
            placeholder="Lives in"
          />
          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>

        <div>
          
          <input type="text" className="infoInput" placeholder="Realtionship Status" />
        </div>

<div>
Profile Image
<input type="file" name='profileImg' />
cover Image
<input type="file" name='coverImg' />
</div>

<button className="button infoButton">Update</button>

      </form>
    </Modal>
  );
}
export default ProfileModal;
