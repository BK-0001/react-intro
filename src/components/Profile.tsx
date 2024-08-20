type Props = {
  name: string;
  age: number;
  img?: string;
  alt: string;
};

export function ChildForProfile({ name, age, alt, img }: Props) {
  // what do I do if some data are not existing?

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <div style={{ width: 40, height: 40 }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={img}
          alt={alt}
        />
      </div>
    </>
  );
}
