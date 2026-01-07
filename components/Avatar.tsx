import { createAvatar } from "@dicebear/core";
import Image from "next/image";
import { pixelArt } from "@dicebear/collection";
function Avatar({ seed, className }: { seed: string; className?: string }) {
  const avatar = createAvatar(pixelArt, {
    seed,
  });
  const svg = avatar.toString();
  const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString(
    "base64"
  )}`;

  return (
    <Image
      src={dataUrl}
      alt="avatar"
      width={60}
      height={60}
      className={className}
    />
  );
}
export default Avatar;
