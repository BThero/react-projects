import { useParams } from "react-router-dom";
import { getPerson } from "../data";
import { H3, H4 } from "./../Person/Person.styled";
import Experience from "./Experience";

function Person(): JSX.Element {
  let params = useParams();
  let person = getPerson(parseInt(params.personId!, 10))!;

  return (
    <main>
      <H3>{person.position}</H3>
      <H4>{person.name}</H4>
      <p>{person.span}</p>
      <Experience list={person.experience}></Experience>
    </main>
  );
}

export default Person;
