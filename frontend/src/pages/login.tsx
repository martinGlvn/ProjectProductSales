import {
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <Container marginTop={10}>
      <Heading textAlign="center">Iniciar Sesion</Heading>
      <Card padding={3}>
        <form>
          <FormControl marginBottom={5}>
            <FormLabel>Email</FormLabel>
            <Input type="text" placeholder="Ingresa tu email" />
          </FormControl>
          <FormControl>
            <FormLabel>Codigo</FormLabel>
            <Input type="text" placeholder="Ingresa tu codigo" />
          </FormControl>
          <ButtonGroup marginTop={8} justifyContent="center">
            <Button>Iniciear Sesion</Button>
            <Button>Iniciear Sesion</Button>
          </ButtonGroup>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
