import Card from "../card/Card";

const CardList = (props) => (
  <div>
    {props.profiles.map((user) => (
      <Card key={user.id} {...user} />
    ))}
  </div>
);

export default CardList;
