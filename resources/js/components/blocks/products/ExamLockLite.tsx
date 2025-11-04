
import Hero from "@/components/layout/Hero";
import Certification from "@/components/layout/Certification";
import { type BlockProps } from '@/types/statamic';

export default function ExamLockLite({ block, ...props }: BlockProps) {
  return (
    <div>
      <Hero heading={props.heading} description={props.description} badgeTitle={props.badgeTitle} />
      <Certification {...props} />
    </div>
  );
}
