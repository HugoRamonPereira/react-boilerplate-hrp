import { useForm } from 'react-hook-form';

interface IFormFields {
  email: string;
  password: string;
}

const Form = () => {
  const { control } = useForm<IFormFields>();

  return (
    <div>
      <form>
        <h1>
          Alien Dev Login Form
        </h1>
      </form>
    </div>
  );
};

export default Form;
