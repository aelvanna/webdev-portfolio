import { Card } from 'pixel-retroui';

export default function CardBody({
  content = '',
  paragraphs = [],
}: {
  title?: string;
  content?: string;
  paragraphs?: string[];
} = {}) {
  return (
    <div className="cardbody-container px-5">
      <Card
        bg="#fdff9e"
        textColor="#000000"
        borderColor="#000000"
        shadowColor="#fedc34"
        className="h-72 overflow-y-auto p-6 md:h-screen"
      >
        <div style={{ padding: '1.5rem' }}>
          {paragraphs.length > 0 ? (
            <div>
              {paragraphs.map((para, index) => (
                <p
                  key={index}
                  style={{
                    marginBottom: '1.5rem',
                    lineHeight: '1.6',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          ) : content ? (
            <p style={{ lineHeight: '1.6' }}>{content}</p>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
