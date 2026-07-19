import { Card } from "pixel-retroui";

export default function Home() {
  return (
    <div className="container min-w-full flex flex-col p-5">
      <div className="header-card-container">
        <Card
          bg="#fdff9e"
          textColor="#000000"
          borderColor="#000000"
          shadowColor="#fedc34"
        >
          <h1>Header</h1>
          <p className="subtitle pt-2">Subtitle</p>
        </Card>
      </div>
      <div className="content-card-container">
        <Card
          bg="#fdff9e"
          textColor="#000000"
          borderColor="#000000"
          shadowColor="#fedc34"
          className="h-96 md:h-screen"
        >
          <h2>Card Title</h2>
          <p className="pt-2">This is the card content.</p>
        </Card>
      </div>
    </div>
  );
}
