import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Image from "../../public/Assets/Kwaralogo.png";
import { Flex, Grid, Frame } from "../../components/Box/styles";
import Button from "../../components/Button";
import {
  ImageFrame,
  Layout,
  Wrapper,
  ImageSection,
  FormSection,
  FormWrapp,
  InputField,
  LoggedIn,
  ForgotPassword,
  Title,
  LogoAndName,
  HaveAnAcc,
  LogInTxt,
} from "./styles";

const LogIn = () => {
  const initialValues = {
    id: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    lastname: yup.string().min(2).required("Missing id "),
    name: yup.string().min(2).required("Missing password "),
  });

  return (
    <Layout>
      <Wrapper
        height="100%"
        justifyContent="stretch"
        alignItems="stretch"
        columns="1fr 1fr"
      >
        <ImageSection>
          <ImageFrame></ImageFrame>
          <LogoAndName
            height="max-content"
            direction="row"
            wrap="no-wrap"
            margin="0 0 0 83px"
          >
            <Frame object="contain" width="193px" height="193px">
              <img src={Image} alt="logo" />
            </Frame>

            <Title>The Kwara State Government</Title>
          </LogoAndName>
        </ImageSection>

        <FormSection>
          <FormWrapp>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={() => []}
            >
              {({ handleChange, values: { password, id } }) => (
                <Form>
                  <LogInTxt>Sign in to your Account</LogInTxt>

                  <Grid gap="48px">
                    <InputField direction="column" alignItems="flex-start">
                      <label>User ID</label>
                      <Field
                        type={"type"}
                        name={"id"}
                        value={id}
                        placeholder={"placeholder"}
                        onChange={handleChange}
                        className="input"
                      />
                      <ErrorMessage name={"id"} component="div" />
                    </InputField>

                    <InputField direction="column" alignItems="flex-start">
                      <label>Password</label>
                      <Field
                        type={"type"}
                        name={"password"}
                        value={password}
                        placeholder={"placeholder"}
                        onChange={handleChange}
                        className="input"
                      />
                      <ErrorMessage name={"password"} component="div" />
                    </InputField>
                  </Grid>

                  <Flex justifyContent="space-between" margin="28px 0 0 0">
                    <LoggedIn width="max-content">
                      <input type="checkbox" />
                      <span>Keep me logged in</span>
                    </LoggedIn>
                    <ForgotPassword>Forgot Password?</ForgotPassword>
                  </Flex>

                  <Flex margin="46px 0 53px 0">
                    <HaveAnAcc>
                      Don't have an account? <span> contact us</span>
                    </HaveAnAcc>
                  </Flex>

                  <Button type="submit" text={"Log In"}></Button>
                </Form>
              )}
            </Formik>
          </FormWrapp>
        </FormSection>
      </Wrapper>
    </Layout>
  );
};

export default LogIn;
