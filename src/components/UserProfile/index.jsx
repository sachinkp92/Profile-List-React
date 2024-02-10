import "./index.css";

const UserProfile = (props) => {
  let { userDetails } = props;
  let { imageUrl, name, role } = userDetails;

  return (
    <>
      <li className="list-container">
        <img src={imageUrl} alt="profile-img" />
        <div className="details-container">
          <h1>{name}</h1>
          <p>{role}</p>
        </div>
      </li>
    </>
  );
};

export default UserProfile;
