import { Card } from "pixel-retroui";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex flex-col gap-2">
        <Card
          bg="#fdff9e"
          textColor="#000000"
          borderColor="#000000"
          shadowColor="#fedc34"
          className="p-4 md:w-xl"
        >
          <h1> Header</h1>
          <p className="subtitle pt-2">Subtitle</p>
        </Card>
        <Card
          bg="#fdff9e"
          textColor="#000000"
          borderColor="#000000"
          shadowColor="#fedc34"
          className="p-4 md:h-100"
        >
          <h2>Card Title</h2>
          <p className="pt-2">This is the card content.</p>
        </Card>
      </div>
    </div>
  );
}
