import { Card } from 'pixel-retroui';

export default function CardHeader({
  title = 'Default Title',
  subtitle = '',
}: {
  title?: string;
  link?: string;
  subtitle?: string;
} = {}) {
  return (
    <div className="cardheader-container px-5">
      <Card bg="#fdff9e" textColor="#000000" borderColor="#000000" shadowColor="#fedc34">
        <h1 className="text-2xl">{title}</h1>
        <p className="subtitle pt-2">{subtitle}</p>
      </Card>
    </div>
  );
}
