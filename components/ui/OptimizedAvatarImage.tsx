"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

const OptimizedAvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    asChild
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  >
    <Image src={props.src! as string} alt={props.alt!} width={48} height={48} />
  </AvatarPrimitive.Image>
));
OptimizedAvatarImage.displayName = AvatarPrimitive.Image.displayName;

export { OptimizedAvatarImage };
