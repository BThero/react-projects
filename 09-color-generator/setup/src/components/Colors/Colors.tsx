import React, { useEffect, useState } from "react";
import Values from "values.js";
import Color from "./Color/Color";
import { Main } from "./Colors.styled";
import { ArrayToHex } from "../../common/utils";

interface Props {
  color: string;
}

function Colors(props: Props): JSX.Element {
  const [list, setList] = useState<Array<any>>(new Values(props.color).all(10));

  useEffect(() => {
    setList(new Values(props.color).all(10));
  }, [props.color]);

  return (
    <Main>
      {list.map((item, idx) => {
        return (
          <Color
            index={idx}
            key={idx}
            color={ArrayToHex(item["rgb"])}
            weight={item["weight"]}
          />
        );
      })}
    </Main>
  );
}

export default Colors;
