import { Container, DefaultHeader, BottomNav } from "@components/index";

const Community = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <DefaultHeader showIcon="community" />
      <Container withBottomNav={true}>
        <h1 className="text-4xl font-bold text-black">Community</h1>
      </Container>
      <BottomNav />
    </div>
  );
};

export default Community;
