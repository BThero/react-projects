import { Article, Img, H2, Title, P, Icon } from "./Person.styled";

interface Props {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
  position: string;
}

function Person(props: Props): JSX.Element {
  return (
    <Article position={props.position}>
      <Img src={props.image} alt={props.name} />
      <H2>{props.name}</H2>
      <Title>{props.title}</Title>
      <P>{props.quote}</P>
      <Icon />
    </Article>
  );
}

export default Person;
