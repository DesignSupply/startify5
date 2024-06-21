import { useSomeContext } from './AppReact';

type propsType = {
  message: string;
};

const ExampleComponent = (props: propsType): JSX.Element => {
  const context = useSomeContext();
  console.log(context?.message);
  return (
    <>
      <p>{props.message}</p>
    </>
  );
};

export default ExampleComponent;
