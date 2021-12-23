import { useEffect, useState } from "react";
import data from "./../common/data";
import Person from "./Person/Person";
import Loading from "./Loading";
import { Main, Button } from "./Slider.styled";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Slider(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [people] = useState(data);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1);
    } else if (index >= people.length) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    if (loading === true) {
      return;
    }

    let slider = setInterval(() => {
      setIndex((i) => i + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index, loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Main>
      {people.map((person, idx) => {
        let position = "next";

        if (idx === index) {
          position = "cur";
        } else if ((idx + 1) % people.length === index) {
          position = "prev";
        }

        return <Person {...person} position={position} />;
      })}
      <Button
        left
        onClick={(event) => {
          event.preventDefault();
          setIndex((i) => i - 1);
        }}
      >
        <FiChevronLeft />
      </Button>
      <Button
        right
        onClick={(event) => {
          event.preventDefault();
          setIndex((i) => i + 1);
        }}
      >
        <FiChevronRight />
      </Button>
    </Main>
  );
}

export default Slider;
