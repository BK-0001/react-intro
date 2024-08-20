import { ChildForProfile } from "./Profile";

export function Message() {
  const name = "Bart";
  const age = 19;
  const img =
    "https://quietly-image-uploads.s3.amazonaws.com/item_77019_1280px_008fe9f6519e4cf3891822d28a606f2c.jpeg";
  const alt = "handsome guy";

  return <ChildForProfile name={name} age={age} img={img} alt={alt} />;
}
