import { createContext, useState, useContext, useEffect } from 'react';
import ExampleComponent from '@/components/react/ExampleComponent.tsx';

const storeData = {
  message: 'default message'
};
const Context = createContext<{ message: string } | null>(null);

const AppReact = (): JSX.Element => {
  const [context, setContext] = useState(storeData);
  useEffect(() => {
    setContext({ message: 'react state updated.' });
  }, []);
  return (
    <>
      <Context.Provider value={context}>
        <ExampleComponent message="React is ready." />
      </Context.Provider>
    </>
  );
};

export function useSomeContext() {
  return useContext(Context);
}

export default AppReact;
