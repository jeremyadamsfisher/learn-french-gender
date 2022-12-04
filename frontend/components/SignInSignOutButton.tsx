import {
  Avatar,
  Button,
  Spinner,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Center,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export function SignInSignOutButton() {
  const signInWithGoogle = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
  }, []);

  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Spinner size={"xs"} />;
  }

  if (user) {
    return (
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar
              size="sm"
              name={user.displayName || ""}
              src={user.photoURL || ""}
            />
          </MenuButton>
          <MenuList>
            <Center>
              <Button w={"95%"} onClick={() => signOut(auth)}>
                Sign out
              </Button>
            </Center>
          </MenuList>
        </Menu>
      </Flex>
    );
  }

  return (
    <Button leftIcon={<FaUserCircle />} onClick={() => signInWithGoogle()}>
      Sign in
    </Button>
  );
}
