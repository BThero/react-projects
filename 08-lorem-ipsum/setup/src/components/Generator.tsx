import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  Main,
  Form,
  Label,
  Button,
  Input,
  Section,
  P,
} from "./Generator.styled";

function Generator(): JSX.Element {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>();

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }

    if (count > 10) {
      setCount(10);
    }
  }, [count]);

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setLoading(true);

    await fetch(
      `https://baconipsum.com/api/?type=meat-and-filler&paras=${count}`
    )
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res as Array<string>);
        console.log(data);
      });
  }

  function handleClear(e: SyntheticEvent) {
    e.preventDefault();
    setData(undefined);
    setLoading(false);
    setCount(0);
  }

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <Label>Paragraphs:</Label>
        <Input
          type="number"
          name="amount"
          value={count}
          onChange={(e) => {
            setCount(parseInt(e.target.value));
          }}
        />
        <Button primary>Generate</Button>
      </Form>
      {(loading || data) && (
        <Section>
          {loading && <P>Loading</P>}
          {!loading && (
            <>
              {data!.map((item, idx) => (
                <P key={idx}>{item}</P>
              ))}
              <Button onClick={handleClear}>Clear All</Button>
            </>
          )}
        </Section>
      )}
    </Main>
  );
}

export default Generator;
