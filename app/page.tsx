import { Card } from "pixel-retroui";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Card
        bg="#fdff9e"
        textColor="#000000"
        borderColor="#000000"
        shadowColor="#fedc34"
        className="md:w-xl lg:w-4xl"
      >
        <h1> Header</h1>
        <p className="subtitle pt-2">Subtitle</p>
      </Card>
      <Card
        bg="#fdff9e"
        textColor="#000000"
        borderColor="#000000"
        shadowColor="#fedc34"
        className="h-100 lg:h-200 md:w-xl lg:w-4xl"
      >
        <h2>Card Title</h2>
        <p className="pt-2">This is the card content.</p>
      </Card>
    </div>
  );
}
