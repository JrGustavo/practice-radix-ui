import {Grid, Card, Heading, Text, Badge, Flex} from '@radix-ui/themes'
import {tasks} from '@/data'

function Page(){
  return (
      <div className='flex min-h-screen flex-col items-center justify-center p-24'>
        <Grid columns="3" gap="4">
            {tasks.map((task) => (
                <Card key={task.id}>
                <Heading size="1">{task.title}</Heading>
                    <Flex justify = "between">
                        <Badge
                            color={
                            task.priority === "high"
                            ? "red"
                            : task.priority === "medium"
                            ? "yellow"
                            : "green"
                        }
                        >{task.priority}</Badge>
                        <Text size="1" >{task.createdAt}</Text>
                    </Flex>
                <Text>
                Creado por {task.author} el {task.createdAt}
                </Text>
                </Card>
            ))}
        </Grid>
      </div>
  );
}

export default Page;