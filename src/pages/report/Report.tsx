import { Container, DefaultHeader, BottomNav } from "@components/index";

const Report = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <DefaultHeader />
      <Container withBottomNav={true}>
        <h1 className="text-4xl font-bold text-black">Report</h1>
      </Container>
      <BottomNav />
    </div>
  );
};

export default Report;
