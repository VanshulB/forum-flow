import React from "react";
import { Form, Formik } from "formik";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Wrapper from "@/components/Wrapper";
import InputField from "@/components/InputField";
import { useMutation } from "urql";
import { useRegisterMutation } from "@/generated/graphql";

interface registerProps {}

const REGISTER_MUTATION = `
  mutation Register($username: String!, $password: String!){
    register(options: {username: $username, password: $password}) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }

`;

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();
  return (
    <>
      <Wrapper variant="small">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values) => {
            const response = await register(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="username"
                label="username"
                placeholder="username"
              />
              <Box mt={5}>
                <InputField
                  name="password"
                  label="password"
                  placeholder="password"
                  type="password"
                />
              </Box>
              <Button
                type="submit"
                colorScheme={"teal"}
                isLoading={isSubmitting}
                mt={5}
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

export default Register;
