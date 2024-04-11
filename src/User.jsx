function User({ address, company, email, id, name, phone, username, website }) {
  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#000",
        color: "#efefef",
        textAlign: "center",
      }}
    >
      <h4>id: {id}</h4>
      <h4>name: {name}</h4>
      <h4>phone: {phone}</h4>
      <h4>company: {company.name}</h4>
      <h4>email: {email}</h4>
      <h4>username: {username}</h4>
      <h4>website: {website}</h4>
      <h4>address: {address.city}</h4>
    </div>
  );
}

export default User;
