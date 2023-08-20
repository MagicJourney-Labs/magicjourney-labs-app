import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { Card, Flex, Avatar, Box, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <div>
      <div>MagicJourney Labs</div>
      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Mygtukas
      </Button>
      <Card>
        <Flex gap="3" align="center">
          <Avatar size="3" src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop" radius="full" fallback="T" />
          <Box>
            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>
    </div>
  );
}
