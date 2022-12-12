import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BoxContainer, FormBody, SubmitBtn, TextInput, Title } from './styles';

interface IFormFields {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(3).max(20).required()
});

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: {errors}
  } = useForm<IFormFields>({
    resolver: yupResolver(schema)
  });

  const formSubmitHandler: SubmitHandler<IFormFields> = (data: IFormFields) => {
    console.log('Form data is', data);
  };

  return (
    <BoxContainer>
      <FormBody onSubmit={handleSubmit(formSubmitHandler)}>
        <Title>Alien Dev Login Form</Title>
        <br />
        <br />
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              type='email'
              label='Email'
              value={field.value || ''}
              variant='outlined'
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ''}
            />
          )}
        />
        <br />
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              type='password'
              label='Password'
              value={field.value || ''}
              variant='outlined'
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
            />
          )}
        />
        <br />
        { errors.email || errors.password
          ? <SubmitBtn variant='contained' type="submit" disabled >Submit</SubmitBtn>
          : <SubmitBtn variant='contained' type="submit" >Submit</SubmitBtn>
        }
      </FormBody>
    </BoxContainer>
  );
};

export default Form;
