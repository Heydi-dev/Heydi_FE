import { Container, DefaultHeader, BottomNav } from "@components/index";

const Mypage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <DefaultHeader />
      <Container>
        <h1 className="text-4xl font-bold text-black">Mypage</h1>
      </Container>
      <BottomNav />
    </div>
  );
};

export default Mypage;
