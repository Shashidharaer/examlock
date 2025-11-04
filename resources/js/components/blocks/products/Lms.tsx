import Hero from "@/components/layout/Hero";
import { BlockProps } from "@/types/statamic";

export default function Examlock({block, ...props}: BlockProps) {
  return (
    <div>
      <Hero {...props} />
    </div>
  );
}
