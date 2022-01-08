import React, { useEffect, useState } from "react";
import {
  GlobalContextType,
  GlobalContextUpdateType,
  ItemType,
} from "../common/types";

function fetchLocal() {
  let n: number = 0;
  let a: Array<ItemType> = [];

  while (localStorage.getItem(`list_${n}`) != null) {
    a.push({
      id: n,
      name: localStorage.getItem(`list_${n}`)!,
    });

    n++;
  }

  return {
    list: a,
    nextId: n,
    text: localStorage.getItem("text") || "",
  };
}

const defaultValues = {
  activeId: -1,
  alert: "",
  ...fetchLocal(),
};

export const GlobalContext = React.createContext<GlobalContextType>({
  ...defaultValues,
  update: () => {},
});

function GlobalProvider(props: { children: any }): JSX.Element {
  const [context, setContext] = useState<GlobalContextType>({
    ...defaultValues,
    update: updateContext,
  });

  function updateContext(contextUpdates: GlobalContextUpdateType) {
    setContext((currentContext) => ({
      ...currentContext,
      ...contextUpdates,
    }));
  }

  useEffect(() => {
    localStorage.setItem("text", context.text);
  }, [context.text]);

  useEffect(() => {
    for (let i = 0; i < context.list.length; i++) {
      localStorage.setItem(`list_${i}`, context.list[i].name);
    }

    return () => {
      for (let i = 0; i < context.list.length; i++) {
        localStorage.removeItem(`list_${i}`);
      }
    };
  }, [context.list]);

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
